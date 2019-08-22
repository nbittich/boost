package tech.artcoded.boost.book.service;

import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Stars;
import tech.artcoded.boost.book.repository.StarsRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface StarsService extends CrudService<Long, Stars> {

    StarsRepository getRepository();

    default Optional<Stars> findByBookAndUser(Book book, User user) {
        return getRepository().findByBookAndUser(book,user);
    }
    default List<Stars> findByBook(Book book) {
        return getRepository().findByBook(book);
    }
}
