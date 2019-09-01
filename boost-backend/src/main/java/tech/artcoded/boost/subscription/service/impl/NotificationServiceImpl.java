package tech.artcoded.boost.subscription.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;
import tech.artcoded.boost.subscription.repository.NotificationRepository;
import tech.artcoded.boost.subscription.service.NotificationService;

@Getter
@Service
public class NotificationServiceImpl implements NotificationService {
    private final KafkaEventProducer eventProducer;
    private final NotificationRepository repository;

    @Autowired
    public NotificationServiceImpl(KafkaEventProducer eventProducer, NotificationRepository repository) {
        this.eventProducer = eventProducer;
        this.repository = repository;
    }
}
