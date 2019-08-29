package tech.artcoded.boost.book.controller;

import com.github.slugify.Slugify;
import com.google.common.collect.Maps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.*;
import tech.artcoded.boost.book.dto.BookDto;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.entity.ChapterHistory;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterHistoryService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.security.Principal;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/book")
@Slf4j
public class BookController {

    @Data
    @EqualsAndHashCode(of = "key")
    @AllArgsConstructor
    class CountryCode {
        private String key;
        private String value;

    }

    private static final Slugify SLUGIFY = new Slugify();

    private final BookService bookService;
    private final ChapterService chapterService;
    private final ChapterHistoryService chapterHistoryService;
    private final StarService starsService;
    private final UserService userService;

    @Autowired
    public BookController(BookService bookService, ChapterService chapterService, ChapterHistoryService chapterHistoryService, StarService starsService, UserService userService) {
        this.bookService = bookService;
        this.chapterService = chapterService;
        this.chapterHistoryService = chapterHistoryService;
        this.starsService = starsService;
        this.userService = userService;
    }


    @PutMapping("/chapter/publish")
    public Map.Entry<String, String> publishChapter(@RequestBody ChapterDto chapter, Principal principal) {
        User user = userService.principalToUser(principal);
        if(chapter.getId() != null){
            Chapter chap = this.chapterService.findById(chapter.getId()).orElseThrow(() -> new RuntimeException("chapter not found"));
            Optional<Book> book = this.bookService.findByIdAndUser(chap.getBookId(), user);

            if (!book.isPresent()){
                throw new AccessDeniedException("Forbidden");
            }

        }

         CompletableFuture.runAsync(()->{
            chapterService.publish(chapter,user);
        });
        return Maps.immutableEntry("message", String.format("Chapter will be added"));


    }

    @PutMapping
    @Transactional
    public Book addBook(@RequestBody BookDto bookDto, Principal principal) {

        User user = userService.principalToUser(principal);
        if(bookDto.getId()!= null){
            Optional<Book> optionalBook = Optional.ofNullable(bookDto.getId()).flatMap(id-> this.bookService.findByIdAndUser(id,user));
            if (!optionalBook.isPresent()){
                throw new AccessDeniedException("Forbidden");
            }
        }
        return bookService.saveBookWithCover(bookDto, user);

    }

    @DeleteMapping
    @Transactional
    public Map.Entry<String, String> deleteBook(@RequestBody Book book, Principal principal) {
        User user = userService.principalToUser(principal);
        Page<Chapter> chapters = chapterService.findByBookIdAndUser(book.getId(), user, Pageable.unpaged());

        if (chapters.isEmpty()){
            throw new AccessDeniedException("Forbidden");
        }

        chapters.forEach(chapter -> {
            List<ChapterHistory> history = chapterHistoryService.findByChapter(chapter);
            chapterHistoryService.deleteAll(history);
        });

        chapters.stream().map(userService::findByCurrentChapter).flatMap(Collection::stream)
                .forEach(usr -> userService.save(usr.toBuilder().currentChapter(null).build()));

        starsService.deleteAll(starsService.findByBook(book));
        chapterService.deleteAll(chapters);
        bookService.deleteById(book.getId());
        return Maps.immutableEntry("message", String.format("Book %s removed", book.getId()));
    }


    @DeleteMapping("/chapter/{chapterId}")
    @Transactional
    public Map.Entry<String, String> deleteChapter(@PathVariable("chapterId") Long chapterId, Principal principal) {
        User user = userService.principalToUser(principal);
        Chapter chapter = chapterService.findById(chapterId).orElseThrow(EntityNotFoundException::new);
        Optional<Book> book = bookService.findByIdAndUser(chapter.getBookId(), user);

        if (!book.isPresent()){
            throw new AccessDeniedException("Forbidden");
        }

        List<ChapterHistory> history = chapterHistoryService.findByChapter(chapter);
        chapterHistoryService.deleteAll(history);

        userService.findByCurrentChapter(chapter)
                .forEach(usr -> userService.save(usr.toBuilder().currentChapter(null).build()));

        chapterService.deleteById(chapterId);
        return Maps.immutableEntry("message", String.format("Chapter %s removed", chapterId));

    }

    @PostMapping("/chapter/edit")
    @Transactional
    public Map.Entry<String, String> editChapter(@RequestBody ChapterDto chapterDto, Principal principal) {
        User user = userService.principalToUser(principal);
        Chapter chap = this.chapterService.findById(chapterDto.getId()).orElseThrow(() -> new RuntimeException("chapter not found"));

        Optional<Book> book = bookService.findByIdAndUser(chap.getBookId(), user);

        if (!book.isPresent()){
            throw new AccessDeniedException("Forbidden");
        }

        chapterService.updateFields(chapterDto);
        return Maps.immutableEntry("message", String.format("Chapter %s edited", chapterDto.getId()));

    }

    @GetMapping("/titles")
    public List<BookRepository.BookTitle> getTitles(){
        return bookService.getTitles();
    }

    @GetMapping("/top")
    public List<Book> getTop3(){
        return bookService.findTop3ByStars();
    }


    @GetMapping("/last")
    public List<Book> lastBooks( ) {
        return bookService.findTop3OrOrderByCreatedDateDesc();
    }


    @GetMapping("/country-code")
    @Cacheable("countryCode")
    public List<CountryCode> countryCode( ) {
        List<CountryCode> locales = Arrays.stream(Locale.getAvailableLocales())
                .map(locale -> new CountryCode(locale.getLanguage().toLowerCase(), locale.getDisplayLanguage()))
                .distinct()
                .filter(cc -> StringUtils.isNotEmpty(cc.key) && StringUtils.isNotEmpty(cc.value))
                .collect(Collectors.toList());
        return locales;

    }

    @GetMapping
    public Page<Book> books(Pageable pageable) {
        return bookService.findAllByPublishedIsTrue(pageable);
    }

    @GetMapping("/search/title")
    public Page<Book> books(@RequestParam("title") String title, Pageable page) {
        if (StringUtils.isBlank(title)){
            return Page.empty();
        }
        return bookService.findByPublishedIsTrueAndByTitleContainingIgnoreCase(title, page);

    }

    @GetMapping("/{title}/{bookId}")
    public Book getOne(@PathVariable("bookId") Long bookId,@PathVariable("title") String title, Principal principal){

        Book book = bookService.findById(bookId)
                    .filter(b -> b.isPublished() || userService.principalToUser(principal).getUsername().equalsIgnoreCase(b.getUsername()))
                .orElseThrow(()-> new AccessDeniedException("either the book is not published, in that case only the created user can interact with it"));
        return book;
    }

    @GetMapping("/{bookId}/chapters")
    public Page<Chapter> getChaptersForBook(@PathVariable("bookId") Long bookId, Pageable pageable) {
        return chapterService.findByBookId(bookId,pageable);
    }




}
