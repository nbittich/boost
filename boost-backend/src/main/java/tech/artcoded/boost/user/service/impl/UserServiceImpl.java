package tech.artcoded.boost.user.service.impl;

import lombok.Getter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.repository.UserRepository;
import tech.artcoded.boost.user.service.UserService;

import javax.transaction.Transactional;
import java.security.Principal;

import static java.lang.String.format;
import static java.util.Optional.ofNullable;

@Service
public class UserServiceImpl implements UserService {
    @Getter
    private final UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return this.findByUsername(s).orElseThrow(() -> new UsernameNotFoundException(s + " not found"));
    }

    @Override
    @Transactional
    public User principalToUser(Principal p) {
        var username = ofNullable(p).map(Principal::getName);
        return username.flatMap(repository::findOneByUsername).orElseThrow(() ->
                new RuntimeException(format("Principal %s not found", StringUtils.defaultIfEmpty(username.orElse(null), "USERNAME_NULL")))
        );
    }
}
