package tech.artcoded.boost.book.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;

import javax.persistence.EntityNotFoundException;
import javax.persistence.Lob;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/book")
@Slf4j
public class BookController {

    private final BookService bookService;
    private final ChapterService chapterService;

    @Autowired
    public BookController(BookService bookService, ChapterService chapterService) {
        this.bookService = bookService;
        this.chapterService = chapterService;
    }


    @PostMapping("/chapter/publish")
    public Chapter publishChapter(@RequestBody ChapterDto chapter) {
        return chapterService.saveChapterAndUpload(chapter);
    }

    @GetMapping
    public Page<Book> books(Pageable pageable) {
        return bookService.findAll(pageable);
    }
    @GetMapping("/{bookId}")
    public Book getOne(@PathVariable("bookId")Long bookId){
        return bookService.findById(bookId).orElseThrow(EntityNotFoundException::new);
    }

}
