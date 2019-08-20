package tech.artcoded.boost.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.event.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
