package tech.artcoded.boost.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Stars;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface StarsRepository extends JpaRepository<Stars, Long> {
    Optional<Stars> findByBookAndUser(Book book, User user);

    List<Stars> findByBook(Book book);
}
