package tech.artcoded.boost.user.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;

import java.security.Principal;

public interface UserService extends CrudService<Long, User>, UserDetailsService {
    User principalToUser(Principal p);
}
