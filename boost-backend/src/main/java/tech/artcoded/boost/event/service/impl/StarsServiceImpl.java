package tech.artcoded.boost.event.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.StarsRepository;
import tech.artcoded.boost.book.service.StarsService;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;

@Service
public class StarsServiceImpl implements StarsService {

    @Getter
    private final StarsRepository repository;
    @Getter
    private final KafkaEventProducer eventProducer;

    @Autowired
    public StarsServiceImpl(StarsRepository starsRepository, KafkaEventProducer eventProducer) {
        this.repository = starsRepository;
        this.eventProducer = eventProducer;
    }
}
