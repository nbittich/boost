package tech.artcoded.boost.book.fixture;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;
import tech.artcoded.boost.user.dto.Role;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import java.io.File;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

import static org.apache.commons.io.IOUtils.toByteArray;
import static tech.artcoded.boost.user.dto.Role.RoleType.*;


/**
 * @author nordine bittich
 */
@Configuration
@Profile("dev")
@Slf4j
public class BookFixture implements CommandLineRunner {
    private final UserService userService;
    private final UploadService uploadService;
    private final BookService bookService;
    private final ChapterService chapterService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final Environment env;
    private final StarService starsService;
    private final ObjectMapper objectMapper;

    @Autowired
    public BookFixture(UserService userService, UploadService uploadService, BookService bookService, ChapterService chapterService, BCryptPasswordEncoder passwordEncoder, Environment env, StarService starsService, ObjectMapper objectMapper) {
        this.userService = userService;
        this.uploadService = uploadService;
        this.bookService = bookService;
        this.chapterService = chapterService;
        this.passwordEncoder = passwordEncoder;
        this.env = env;
        this.starsService = starsService;
        this.objectMapper = objectMapper;
    }


    @Override
    public void run(String... args) throws Exception {
        Faker faker = Faker.instance(Locale.getDefault());
        ClassPathResource defaultCover = new ClassPathResource("fixture/" + "/cover.jpg");

        if (Boolean.TRUE.equals(env.getProperty("fixture.books.delete-at-start", Boolean.class))) {
            log.info("deleting books");
            bookService.deleteAll();
            chapterService.deleteAll();
            uploadService.deleteAll();
            uploadService.deleteAllUploadFiles();
            userService.deleteAll();

        }
        log.info("save default users");
        Role.RoleBuilder adminRole = Role.builder().role(ADMIN);
        Role.RoleBuilder userRole = Role.builder().role(USER);
        Role.RoleBuilder anonRole = Role.builder().role(ANONYMOUS);
        User admin = userService.save(User.builder()
                .username("admin")
                .password(passwordEncoder.encode("1234"))
                .roles(Arrays.asList(adminRole.build(), userRole.build()))
                .build());
        log.info("user saved : {}", admin);
        User user = userService.save(User.builder().username("user")
                .roles(Collections.singletonList(userRole.build()))
                .password(passwordEncoder.encode("1234")).build());
        log.info("user saved : {}", user);
            Role.RoleBuilder contributor = Role.builder().role(CONTRIBUTOR);
        User contr = userService.save(User.builder()
                .password("1234")
                .username("contributor")
                .roles(Arrays.asList(contributor.build())).build());

        Long bookSize = env.getProperty("fixture.books.size", Long.class);
        byte[] defaultCoverStream = toByteArray(defaultCover.getInputStream());
        Upload upload = bookService.getUploadService().upload(Base64.getEncoder().encode(defaultCoverStream), MediaType.IMAGE_JPEG_VALUE, "cover.jpg");
        List<Book> books = LongStream.range(0L, bookSize)
                .peek(i -> log.info("saving book #" + i + 1))
                .mapToObj(i -> Book.builder())
                .map(builder -> builder
                        .user(contr)
                        .cover(upload)
                        .category(faker.book().genre())
                        .title(faker.book().title())
                        .author(faker.book().author())
                        .description(faker.lorem().paragraph(20))
                        .build())
                .map(bookService::save)
                .collect(Collectors.toList());


        if(books.size() >= 4) {
            Collections.reverse(books); // shown in the top 3 homepage
            for (int i = 0; i < 4; i++) {
                final int idx = i;
                String pathChap = "fixture/chapters/" + (i + 1);
                ClassPathResource cover = new ClassPathResource(pathChap + "/cover.jpg");

                Collection<File> files = FileUtils.listFiles(new ClassPathResource(pathChap).getFile(), new String[]{"mp3"}, true);
                files.stream()
                        .map(audio -> ChapterDto.builder()
                                        .contentType("audio/mpeg")
                                .order(Integer.valueOf(Integer.valueOf(audio.getName().charAt(0))))
                                .file(Base64.getEncoder().encode(readFileToByteArray(audio)))
                                .bookId(books.get(idx).getId())
                                .description(faker.lorem()
                                        .paragraph(3))
                                .fileName(audio.getName())
                                .title(faker.book().title())
                                .build()
                        ).forEach(chapterService::saveChapterAndUpload);
                chapterService.flush();

                byte[] input = toByteArray(cover.getInputStream());
                Book bookWCover = books.get(i).toBuilder().cover(bookService.getUploadService().upload(Base64.getEncoder().encode(input), MediaType.IMAGE_JPEG_VALUE, "cover.jpg")).build();
                Book bookUpdated = bookWCover.toBuilder().totalDuration(chapterService.getTotalDuration(bookWCover)).build();
                Book bookSavedWithChapter = bookService.save(bookUpdated);
                Star star = Star.builder().star(Math.round(RandomUtils.nextDouble(0,5) * 2) / 2.0).user(user.toBuilder().build()).book(bookSavedWithChapter).build();
                Star star2 = Star.builder().star(Math.round(RandomUtils.nextDouble(0,5) * 2) / 2.0).user(contr.toBuilder().build()).book(bookSavedWithChapter).build();
                Star star3 = Star.builder().star(Math.round(RandomUtils.nextDouble(0,5) * 2) / 2.0).user(admin.toBuilder().build()).book(bookSavedWithChapter).build();

                starsService.saveAll(Arrays.asList(star,star2,star3));
            }
        }

    }
    @SneakyThrows
    private byte[] readFileToByteArray(File file) {
        return FileUtils.readFileToByteArray(file);
    }
}
