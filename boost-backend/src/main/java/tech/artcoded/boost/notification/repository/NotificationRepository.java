package tech.artcoded.boost.notification.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.notification.entity.Notification;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findAllByReadFalseAndUsers_Username(String username);

    List<Notification> findAllByUsers_UsernameOrderByCreatedDateDesc(String username);

}
