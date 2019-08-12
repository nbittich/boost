package tech.artcoded.boost.book.service.impl;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.book.service.BookService;

@Service
@Slf4j
public class BookServiceImpl implements BookService {
    @Getter
    private final BookRepository repository;

    @Autowired
    public BookServiceImpl(BookRepository repository) {
        this.repository = repository;
    }
}
