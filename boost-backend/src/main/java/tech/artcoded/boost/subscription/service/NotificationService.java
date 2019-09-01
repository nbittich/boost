package tech.artcoded.boost.subscription.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.subscription.entity.Notification;
import tech.artcoded.boost.subscription.repository.NotificationRepository;
import tech.artcoded.boost.user.entity.User;

import java.util.List;

public interface NotificationService extends CrudService<Long, Notification> {

    NotificationRepository getRepository();

    default List<Notification> findAllByUser(User subscriber){
        return getRepository().findAllByReadFalseAndUsers_Username(subscriber.getUsername());
    }
}
