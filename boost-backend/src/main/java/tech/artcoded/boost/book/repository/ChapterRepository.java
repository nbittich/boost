package tech.artcoded.boost.book.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;

import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    List<Chapter> findByBook(Book book);
    Page<Chapter> findByBookOrderByOrderAsc(Book book, Pageable pageable);

    @Query("SELECT coalesce(max(chapter.order), 0) FROM Chapter chapter where chapter.book = ?1")
    int getMaxOrder(Book book);
    @Query("SELECT coalesce(sum(chapter.timeDuration), 0) FROM Chapter chapter where chapter.book = ?1")
    long getTotalDuration(Book book);

    List<Chapter> findByBookOrderByOrderDesc(Book b);
}
