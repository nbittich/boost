package tech.artcoded.boost.user.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.repository.UserRepository;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

public interface UserService extends CrudService<Long, User>, UserDetailsService {
    User principalToUser(Principal p);
    UserRepository getRepository();
    default Optional<User> findByUsername(String username){
        return getRepository().findOneByUsername(username);
    }
    default List<User> findByCurrentChapter(Chapter chapter){
        return getRepository().findByCurrentChapter(chapter);
    }
}
