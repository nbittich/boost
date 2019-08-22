package tech.artcoded.boost.user.service.impl;

import lombok.Getter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.repository.UserRepository;
import tech.artcoded.boost.user.service.UserService;

import java.security.Principal;

@Service
public class UserServiceImpl implements UserService {
    @Getter
    private final UserRepository repository;

    @Getter
    private final KafkaEventProducer eventProducer;


    @Autowired
    public UserServiceImpl(UserRepository repository, KafkaEventProducer eventProducer) {
        this.repository = repository;
        this.eventProducer = eventProducer;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        produceEvent("_LOAD_BY_USERNAME", "Username: " + s);
        return this.findOneByUsername(s).orElseThrow(() -> new UsernameNotFoundException(s + " not found"));
    }

    @Override
    public User principalToUser(Principal p) {
        produceEvent("_PRINCIPAL_TO_USER", "Username: " + p != null? p.getName() : "null_principal" );
        return repository.findOneByUsername(p.getName()).orElseThrow(() ->
                new RuntimeException(String.format("Principal %s not found", StringUtils.defaultIfEmpty(p.getName(), "USERNAME_NULL")))
        );
    }
}
