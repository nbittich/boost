package tech.artcoded.boost.event.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.event.repository.EventRepository;
import tech.artcoded.boost.event.service.EventService;

@Service
public class EventServiceImpl implements EventService {
    @Getter
    private final EventRepository repository;

    @Autowired
    public EventServiceImpl(EventRepository repository) {
        this.repository = repository;
    }
}
