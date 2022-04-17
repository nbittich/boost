package tech.artcoded.boost.subscription.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.notification.repository.NotificationRepository;
import tech.artcoded.boost.notification.service.NotificationService;

@Getter
@Service
public class NotificationServiceImpl implements NotificationService {
    private final NotificationRepository repository;

    @Autowired
    public NotificationServiceImpl(NotificationRepository repository) {
        this.repository = repository;
    }
}
