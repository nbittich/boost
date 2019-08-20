package tech.artcoded.boost.book.service.impl;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.ChapterRepository;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.event.kafka.KafkaEventProducer;
import tech.artcoded.boost.upload.service.UploadService;

@Service
@Slf4j
public class ChapterServiceImpl implements ChapterService {
    @Getter
    private final BookService bookService;
    @Getter
    private final UploadService uploadService;
    @Getter
    private final ChapterRepository repository;
    @Getter
    private final KafkaEventProducer eventProducer;

    @Autowired
    public ChapterServiceImpl(BookService bookService, UploadService uploadService, ChapterRepository repository, KafkaEventProducer eventProducer) {
        this.bookService = bookService;
        this.uploadService = uploadService;
        this.repository = repository;
        this.eventProducer = eventProducer;
    }
}
