package tech.artcoded.boost.subscription.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.subscription.entity.Notification;
import tech.artcoded.boost.subscription.repository.NotificationRepository;
import tech.artcoded.boost.user.entity.User;

import javax.transaction.Transactional;
import java.util.List;

public interface NotificationService extends CrudService<Long, Notification> {

    NotificationRepository getRepository();


     @Override
    @Transactional
    default Notification save(Notification notification){
        return getRepository().save(notification);
    }

    default List<Notification> findAllUnreadByUser(User subscriber){
        return getRepository().findAllByReadFalseAndUsers_Username(subscriber.getUsername());
    }
    default List<Notification> findAllUnreadAndUnreicevedByUser(User subscriber){
        return getRepository().findAllByReadFalseAndReceivedFalseAndUsers_Username(subscriber.getUsername());
    }
    default List<Notification> findAllByUser(User subscriber){
        return getRepository().findAllByUsers_UsernameOrderByCreatedDateDesc(subscriber.getUsername());
    }
}
