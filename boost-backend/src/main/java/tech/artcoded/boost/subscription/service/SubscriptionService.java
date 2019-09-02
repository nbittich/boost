package tech.artcoded.boost.subscription.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.notification.entity.Notification;
import tech.artcoded.boost.notification.service.NotificationService;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.repository.SubscriptionRepository;
import tech.artcoded.boost.user.entity.User;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface SubscriptionService extends CrudService<Long, Subscription> {

    SubscriptionRepository getRepository();
    NotificationService getNotificationService();

    default List<Subscription> findAllBySubscriber( User subscriber){
        return getRepository().findAllBySubscriber(subscriber);
    }
    default List<Subscription> findAllByFollowing( User following){
        return getRepository().findAllByFollowing(following);
    }

    default Optional<Subscription> findBySubscriberAndFollowing( User subscriber, User following){
        return getRepository().findBySubscriberAndFollowing(subscriber,following);
    }

    default Long countBySubscriber(User principalToUser){
        return getRepository().countBySubscriber(principalToUser);
    }

    default Long countByFollowing(User principalToUser){
        return getRepository().countByFollowing(principalToUser);
    }

    @Transactional
    default Subscription saveAndNotify(Subscription sub){
        Subscription subscription = getRepository().save(sub);
        getNotificationService().save(Notification.builder()
                .description(String.format("User %s follows you", subscription.getSubscriber().getUsername()))
                .title("New Follower")
                .users(Collections.singleton(subscription.getFollowing())).build());

        return subscription;
    }
}
