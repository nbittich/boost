package tech.artcoded.boost.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.entity.ChapterHistory;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChapterHistoryRepository extends JpaRepository<ChapterHistory, Long> {
    Optional<ChapterHistory> findByChapterAndUser(Chapter chapter, User user);
    List<ChapterHistory> findTop3ByUserOrderByIdDesc(User user);

    List<ChapterHistory> findByChapter(Chapter chapter);
}
