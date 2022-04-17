package tech.artcoded.boost.event.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.book.repository.StarRepository;
import tech.artcoded.boost.book.service.StarService;

@Service
public class StarServiceImpl implements StarService {

    @Getter
    private final StarRepository repository;

    @Autowired
    public StarServiceImpl(StarRepository starsRepository) {
        this.repository = starsRepository;
    }
}
