package tech.artcoded.boost.subscription.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;
import tech.artcoded.boost.notification.service.NotificationService;
import tech.artcoded.boost.subscription.repository.SubscriptionRepository;
import tech.artcoded.boost.subscription.service.SubscriptionService;

@Getter
@Service
public class SubscriptionServiceImpl implements SubscriptionService {
    private final KafkaEventProducer eventProducer;
    private final SubscriptionRepository repository;
    private final NotificationService notificationService;

    @Autowired
    public SubscriptionServiceImpl(KafkaEventProducer eventProducer, SubscriptionRepository repository, NotificationService notificationService) {
        this.eventProducer = eventProducer;
        this.repository = repository;
        this.notificationService = notificationService;
    }
}
