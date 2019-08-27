package tech.artcoded.boost.book.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.ChapterHistoryRepository;
import tech.artcoded.boost.book.service.ChapterHistoryService;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;

@Service
public class ChapterHistoryServiceImpl implements ChapterHistoryService {
    @Getter
    private final KafkaEventProducer eventProducer;

    @Getter
    private final ChapterHistoryRepository repository;

    @Autowired
    public ChapterHistoryServiceImpl(KafkaEventProducer eventProducer, ChapterHistoryRepository repository) {
        this.eventProducer = eventProducer;
        this.repository = repository;
    }
}
