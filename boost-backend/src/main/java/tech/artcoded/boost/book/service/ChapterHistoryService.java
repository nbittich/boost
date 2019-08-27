package tech.artcoded.boost.book.service;

import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.entity.ChapterHistory;
import tech.artcoded.boost.book.repository.ChapterHistoryRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.User;

import java.util.List;
import java.util.Optional;

public interface ChapterHistoryService extends CrudService<Long, ChapterHistory> {

    ChapterHistoryRepository getRepository();

    default Optional<ChapterHistory> findByChapterAndUser(Chapter chapter, User user){
        return getRepository().findByChapterAndUser(chapter,user);
    }
    default List<ChapterHistory> findTop3ByUserOrderbyIdDesc(User user){
        return getRepository().findTop3ByUserOrderByIdDesc(user);
    }


    default List<ChapterHistory> findByChapter(Chapter chapter){
        return getRepository().findByChapter(chapter);
    }
}
