package tech.artcoded.boost.book.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.book.repository.ChapterRepository;

@RestController
@RequestMapping("/book")
@Slf4j
public class BookController {

    private final BookRepository bookRepository;
    private final ChapterRepository chapterRepository;

    @Autowired
    public BookController(BookRepository bookRepository, ChapterRepository chapterRepository) {
        this.bookRepository = bookRepository;
        this.chapterRepository = chapterRepository;
    }

    @PostMapping("/{bookId}/chapter")
    public Chapter publishChapter(@RequestBody Chapter chapter) {
        return null;
    }

}
