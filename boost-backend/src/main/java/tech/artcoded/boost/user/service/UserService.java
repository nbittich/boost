package tech.artcoded.boost.user.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.repository.UserRepository;

import java.security.Principal;
import java.util.Optional;

public interface UserService extends CrudService<Long, User>, UserDetailsService {
    User principalToUser(Principal p);
    UserRepository getRepository();
    default Optional<User> findOneByUsername(String username){
        return getRepository().findOneByUsername(username);
    }
}
