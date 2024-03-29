package tech.artcoded.boost.book.fixture;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.service.SubscriptionService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;
import tech.artcoded.boost.user.dto.Role;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import java.io.File;
import java.io.InputStream;
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
    private final SubscriptionService subscriptionService;

    @Value("classpath:cover.jpg")
    private Resource cover;
    @Value("${fixture.books.size}")
    private long bookSize;

    @Autowired
    public BookFixture(UserService userService, UploadService uploadService, BookService bookService, ChapterService chapterService, BCryptPasswordEncoder passwordEncoder, Environment env, StarService starsService, SubscriptionService subscriptionService) {
        this.userService = userService;
        this.uploadService = uploadService;
        this.bookService = bookService;
        this.chapterService = chapterService;
        this.passwordEncoder = passwordEncoder;
        this.env = env;
        this.starsService = starsService;
        this.subscriptionService = subscriptionService;
    }


    @Override
    public void run(String... args) throws Exception {
        Faker faker = Faker.instance(Locale.getDefault());

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
                .password(passwordEncoder.encode("1234"))
                .username("contributor")
                .roles(Arrays.asList(contributor.build(),userRole.build())).build());

        subscriptionService.saveAndNotify(Subscription.builder().following(contr).subscriber(admin).build());
        subscriptionService.saveAndNotify(Subscription.builder().following(contr).subscriber(user).build());
        subscriptionService.saveAndNotify(Subscription.builder().following(user).subscriber(admin).build());
        subscriptionService.saveAndNotify(Subscription.builder().following(admin).subscriber(contr).build());

        byte[] defaultCoverStream = toByteArray(cover.getInputStream());
        Upload upload = bookService.getUploadService().upload(Base64.getEncoder().encode(defaultCoverStream), MediaType.IMAGE_JPEG_VALUE, "cover.jpg");
        List<String> lang = Arrays.asList(Locale.getISOCountries());

        List<Book> books = LongStream.range(0L, bookSize)
                .peek(i -> log.info("saving book #{}", i + 1))
                .mapToObj(i -> Book.builder())
                .map(builder -> builder
                        .user(contr)
                        .published(true)
                        .cover(upload)
                        .lang(shuffle(lang).get(0).toLowerCase())
                        .category(faker.book().genre())
                        .title(faker.book().title())
                        .author(faker.book().author())
                        .description(faker.lorem().paragraph(20))
                        .build())
                .map(bookService::save).toList();

        books.forEach(book -> {
            Star star = Star.builder().star(Math.round(RandomUtils.nextDouble(0, 5) * 2) / 2.0).user(user.toBuilder().build()).book(book).build();
            Star star2 = Star.builder().star(Math.round(RandomUtils.nextDouble(0, 5) * 2) / 2.0).user(contr.toBuilder().build()).book(book).build();
            Star star3 = Star.builder().star(Math.round(RandomUtils.nextDouble(0, 5) * 2) / 2.0).user(admin.toBuilder().build()).book(book).build();
            starsService.saveAll(Arrays.asList(star, star2, star3));

        });



    }

    private <A> List<A> shuffle(Collection<A> a) {
        ArrayList<A> as = new ArrayList<>(a);
        Collections.shuffle(as);
        return as;
    }
}
