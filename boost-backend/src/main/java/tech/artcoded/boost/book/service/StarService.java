package tech.artcoded.boost.book.service;

import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.repository.StarRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface StarService extends CrudService<Long, Star> {

    StarRepository getRepository();

    default Optional<Star> findByBookAndUser(Book book, User user) {
        return getRepository().findByBookAndUser(book,user);
    }
    default List<Star> findByBook(Book book) {
        return getRepository().findByBook(book).orElseGet(Collections::emptyList);
    }

    default Star updateStar(Star star) {
        return getRepository().save(star);
    }


}
