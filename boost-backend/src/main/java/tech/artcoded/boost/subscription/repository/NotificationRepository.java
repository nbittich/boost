package tech.artcoded.boost.subscription.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.subscription.entity.Notification;
import tech.artcoded.boost.user.entity.User;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findAllBySubscriptions_Subscriber(User subscriber);
}
