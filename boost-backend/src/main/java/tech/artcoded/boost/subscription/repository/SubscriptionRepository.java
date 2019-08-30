package tech.artcoded.boost.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findAllBySubscriber( User subscriber);
    Optional<Subscription> findBySubscriberAndFollowing( User subscriber, User following);

    List<Subscription> findAllByFollowing(User following);
}
