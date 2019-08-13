package tech.artcoded.boost.book.fixture;

import com.github.javafaker.Faker;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.user.service.UserService;

import java.util.Locale;
import java.util.stream.IntStream;


/**
 * @author nordine bittich
 */
@Configuration
@Profile("dev")
@Slf4j
public class BookFixture implements CommandLineRunner {
    private final UserService userService;
    private final BookService bookService;
    private final Environment env;

    @Autowired
    public BookFixture(UserService userService, BookService bookService, Environment env) {
        this.userService = userService;
        this.bookService = bookService;
        this.env = env;
    }


    @Override
    public void run(String... args) throws Exception {
        Faker faker = Faker.instance(Locale.getDefault());
        if (Boolean.TRUE.equals(env.getProperty("fixture.books.delete-at-start", Boolean.class))) {
            log.info("deleting books");
            bookService.deleteAll();
        }

        IntStream.range(0, env.getProperty("fixture.books.size", Integer.class))
                .peek(i -> log.info("saving book #" + i))
                .mapToObj(i -> faker.book())
                .map(book -> Book.builder()
                        .category(book.genre())
                        .title(book.title())
                        .totalDuration(5000)
                        .description(faker.lorem().paragraph(20))
                        .build())
                .map(bookService::save)
                .forEach(book -> log.info("book '{}' saved with id {}.", book.getTitle(), book.getId()));

    }
}
