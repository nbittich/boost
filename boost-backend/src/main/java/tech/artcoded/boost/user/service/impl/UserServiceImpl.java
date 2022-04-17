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
        return repository.findOneByUsername(p.getName()).orElseThrow(() ->
                new RuntimeException(String.format("Principal %s not found", StringUtils.defaultIfEmpty(p.getName(), "USERNAME_NULL")))
        );
    }
}
