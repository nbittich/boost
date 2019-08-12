package tech.artcoded.boost.book.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;

@RestController
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

}
