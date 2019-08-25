package tech.artcoded.boost.book.scheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.service.BookService;

import javax.transaction.Transactional;

@Service
public class BookStarScheduler {
    private final BookService bookService;

    @Autowired
    public BookStarScheduler(BookService bookService) {
        this.bookService = bookService;
    }

    @Scheduled(fixedRate = 60000L,initialDelay = 45000L)
    @Transactional
    public void refreshBookTop3Stars(){
        this.bookService.invalidateCacheBookTop3();
        this.bookService.findTop3ByStars();
    }

}
