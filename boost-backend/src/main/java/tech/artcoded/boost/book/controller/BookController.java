package tech.artcoded.boost.book.controller;

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
import tech.artcoded.boost.book.entity.Stars;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarsService;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import javax.persistence.EntityNotFoundException;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/book")
@Slf4j
public class BookController {

    private final BookService bookService;
    private final ChapterService chapterService;
    private final StarsService starsService;
    private final UserService userService;

    @Autowired
    public BookController(BookService bookService, ChapterService chapterService, StarsService starsService, UserService userService) {
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
    public Map.Entry<String, String> addBook(@RequestBody BookDto bookDto) {
        Book book = bookService.saveBookWithCover(bookDto);
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
    public Map.Entry<String, String> deleteBook(@RequestBody Book book) {
        chapterService.deleteAll(chapterService.findByBookId(book.getId()));
        bookService.delete(book);
        return Maps.immutableEntry("message", String.format("Book %s removed", book.getId()));
    }

    @GetMapping("/{bookId}")
    public Book getOne(@PathVariable("bookId") Long bookId) {
        return bookService.findById(bookId).orElseThrow(EntityNotFoundException::new);
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
        Stars stars = starsService.findByBookAndUser(book,user).map(b-> b.toBuilder()).orElse(Stars.builder()).star(star).build();
        starsService.save(stars);
        return Maps.immutableEntry("message", String.format("star %s saved or edited", stars.getId()));

    }

}
