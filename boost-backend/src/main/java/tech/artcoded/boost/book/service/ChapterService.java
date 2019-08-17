package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.repository.ChapterRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface ChapterService extends CrudService<Long, Chapter> {
    UploadService getUploadService();
    ChapterRepository getRepository();
    BookService getBookService();

    @Transactional()
    default List<Chapter> findByBookId(Long bookId){
        Optional<Book> book = getBookService().findById(bookId);
        return book.map(b->getRepository().findByBook(b)).orElseGet(Collections::emptyList);
    }

    @SneakyThrows
    default Chapter saveChapterAndUpload(ChapterDto chapter) {
        Upload upload = getUploadService().upload(chapter.getFile(), chapter.getContentType(), chapter.getFileName());
        return getRepository().save(
                Chapter.builder()
                        .book(getBookService().getOne(chapter.getBookId()))
                        .upload(upload)
                        .title(chapter.getTitle())
                        .order(chapter.getOrder())
                        .description(chapter.getDescription())
                        .timeDuration(getUploadService().getAudioDuration(upload.getId()))
                        .build()
        );

    }
}
