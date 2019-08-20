package tech.artcoded.boost.book.service.impl;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;
import tech.artcoded.boost.upload.service.UploadService;

import javax.transaction.Transactional;

@Service
@Slf4j
@Transactional
public class BookServiceImpl implements BookService {
    @Getter
    private final BookRepository repository;
    @Getter
    private final KafkaEventProducer eventProducer;

    @Getter
    private final UploadService uploadService;

    @Autowired
    public BookServiceImpl(BookRepository repository, KafkaEventProducer eventProducer, UploadService uploadService) {
        this.repository = repository;
        this.eventProducer = eventProducer;
        this.uploadService = uploadService;
    }
}
