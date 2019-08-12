package tech.artcoded.boost.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.book.repository.ChapterRepository;

@RestController
@RequestMapping("/book")
public class BookController {

    private final BookRepository bookRepository;
    private final ChapterRepository chapterRepository;

    @Autowired
    public BookController(BookRepository bookRepository, ChapterRepository chapterRepository) {
        this.bookRepository = bookRepository;
        this.chapterRepository = chapterRepository;
    }

}
