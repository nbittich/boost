package tech.artcoded.boost.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface StarRepository extends JpaRepository<Star, Long> {
    Optional<Star> findByBookAndUser(Book book, User user);

    Optional<List<Star>> findByBook(Book book);
}
