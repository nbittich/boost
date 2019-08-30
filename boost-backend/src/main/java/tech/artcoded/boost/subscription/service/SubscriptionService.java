package tech.artcoded.boost.subscription.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.repository.SubscriptionRepository;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface SubscriptionService extends CrudService<Long, Subscription> {

    SubscriptionRepository getRepository();

    default List<Subscription> findAllBySubscriber( User subscriber){
        return getRepository().findAllBySubscriber(subscriber);
    }
    default List<Subscription> findAllByFollowing( User following){
        return getRepository().findAllByFollowing(following);
    }

    default Optional<Subscription> findBySubscriberAndFollowing( User subscriber, User following){
        return getRepository().findBySubscriberAndFollowing(subscriber,following);
    }
}
