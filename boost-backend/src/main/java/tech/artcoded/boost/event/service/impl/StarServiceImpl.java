package tech.artcoded.boost.event.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.StarRepository;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;

@Service
public class StarServiceImpl implements StarService {

    @Getter
    private final StarRepository repository;
    @Getter
    private final KafkaEventProducer eventProducer;

    @Autowired
    public StarServiceImpl(StarRepository starsRepository, KafkaEventProducer eventProducer) {
        this.repository = starsRepository;
        this.eventProducer = eventProducer;
    }
}
