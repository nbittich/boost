package tech.artcoded.boost.book.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Page<Book> findAllByPublishedIsTrue(Pageable pageable);

    Page<Book> findAllByUser(User user, Pageable pageable);

    interface BookTitle{
        String getTitle();
        Long getId();
    }

    Page<Book> findByPublishedIsTrueAndTitleContainingIgnoreCase(String title, Pageable pageable);

    Optional<Book> findByIdAndTitle(Long id, String title);

    List<Book> findTop3ByOrderByCreatedDateDesc();

    List<BookTitle> findByTitleNotNull();


}
