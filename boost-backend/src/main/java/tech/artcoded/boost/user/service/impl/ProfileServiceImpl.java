package tech.artcoded.boost.user.service.impl;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.user.repository.ProfileRepository;
import tech.artcoded.boost.user.service.ProfileService;

@Service
public class ProfileServiceImpl implements ProfileService {
    @Getter
    private final ProfileRepository repository;

    @Autowired
    public ProfileServiceImpl(ProfileRepository repository) {
        this.repository = repository;
    }

}
