package tech.artcoded.boost.book.controller;

import com.github.slugify.Slugify;
import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import tech.artcoded.boost.book.dto.BookDto;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/book")
@Slf4j
public class BookController {

    private static final Slugify SLUGIFY = new Slugify();

    private final BookService bookService;
    private final ChapterService chapterService;
    private final StarService starsService;
    private final UserService userService;

    @Autowired
    public BookController(BookService bookService, ChapterService chapterService, StarService starsService, UserService userService) {
        this.bookService = bookService;
        this.chapterService = chapterService;
        this.starsService = starsService;
        this.userService = userService;
    }


    @PutMapping("/chapter/publish")
    public Map.Entry<String, String> publishChapter(@RequestBody ChapterDto chapter) {
        CompletableFuture.runAsync(() -> {
            Chapter chap = chapterService.saveChapterAndUpload(chapter);
            Book bookUpdated = chap.getBook().toBuilder().totalDuration(chapterService.getTotalDuration(chap.getBook())).build();
            bookService.save(bookUpdated);
        });
        return Maps.immutableEntry("message", String.format("Chapter will be added"));

    }

    @PutMapping
    public Map.Entry<String, String> addBook(@RequestBody BookDto bookDto, Principal principal) {
        Book book = bookService.saveBookWithCover(bookDto, userService.principalToUser(principal));
        return Maps.immutableEntry("message", String.format("Book %s saved", book.getId()));

    }

    @GetMapping
    public Page<Book> books(Pageable pageable) {
        return bookService.findAll(pageable);
    }

    @GetMapping("/search/title")
    public Page<Book> books(@RequestParam("title") String title) {
        return bookService.findByTitleLike(title);
    }

    @DeleteMapping
    @Transactional
    public Map.Entry<String, String> deleteBook(@RequestBody Book book) {
        starsService.deleteAll(starsService.findByBook(book));
        chapterService.deleteAll(chapterService.findByBookId(book.getId()));
        bookService.deleteById(book.getId());
        return Maps.immutableEntry("message", String.format("Book %s removed", book.getId()));
    }

    @GetMapping("/{title}/{bookId}")
    public Book getOne(@PathVariable("bookId") Long bookId,@PathVariable("title") String title){

        Book book = bookService.findById(bookId)
                    .filter(b -> b.getTitle() != null)
                    //.filter(b->SLUGIFY.slugify(b.getTitle()).equalsIgnoreCase(title)) not working cuz two implementations differ pff
                .orElseThrow(EntityNotFoundException::new);
        return book;
    }

    @GetMapping("/{bookId}/chapters")
    public List<Chapter> getChaptersForBook(@PathVariable("bookId") Long bookId) {
        return chapterService.findByBookId(bookId);
    }

    @DeleteMapping("/chapter/{chapterId}")
    public Map.Entry<String, String> deleteChapter(@PathVariable("chapterId") Long chapterId) {
        chapterService.deleteById(chapterId);
        return Maps.immutableEntry("message", String.format("Chapter %s removed", chapterId));

    }

    @PostMapping("/chapter/edit")
    public Map.Entry<String, String> editChapter(@RequestBody ChapterDto chapterDto) {
        chapterService.updateFields(chapterDto);
        return Maps.immutableEntry("message", String.format("Chapter %s edited", chapterDto.getId()));

    }

    @PostMapping("/rate")
    public Map.Entry<String, String> editStar(@RequestParam("bookId") Long bookId, @RequestParam("star") double star, Principal principal) {
        User user = userService.principalToUser(principal);
        Book book = bookService.findById(bookId).orElseThrow(() -> new RuntimeException("book not found"));
        Star stars = starsService.findByBookAndUser(book,user).map(b-> b.toBuilder()).orElse(Star.builder()).star(star).build();
        starsService.save(stars);
        return Maps.immutableEntry("message", String.format("star %s saved or edited", stars.getId()));

    }

    @PostMapping("/chapter/update/current")
    public User editStar(@RequestParam("chapterId") Long chapterId, Principal principal) {
        User user = userService.principalToUser(principal);
        Chapter chapter = chapterService.findById(chapterId).orElseThrow(() -> new RuntimeException("chapter not found"));
        return userService.save(user.toBuilder().currentChapter(chapter).build());

    }

}
