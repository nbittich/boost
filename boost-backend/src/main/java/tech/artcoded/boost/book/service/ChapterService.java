package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
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
    default List<Chapter> findByBookId(Long bookId) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase()+"_FIND_BY_BOOK_ID", "BookId: " + bookId);
        Optional<Book> book = getBookService().findById(bookId);
        return book.map(b -> getRepository().findByBookOrderByOrderAsc(b)).orElseGet(Collections::emptyList);
    }

    default long getTotalDuration(Book book) {
        return getRepository().getTotalDuration(book);
    }

    @SneakyThrows
    default Chapter saveChapterAndUpload(ChapterDto chapter) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase()+"_SAVE_AND_UPLOAD", "BookId: " + chapter.getBookId() + ", Title: " + chapter.getTitle() + ", ContentType: " + chapter.getContentType());
        Upload upload = getUploadService().upload(chapter.getFile(), chapter.getContentType(), chapter.getFileName());
        Optional<Book> optionalBook = getBookService().findById(chapter.getBookId());
        Book book = optionalBook.orElseThrow(() -> new RuntimeException("cannot save chapter; book not found"));
        return getRepository().save(
                Chapter.builder()
                        .book(book)
                        .upload(upload)
                        .title(chapter.getTitle())
                        .order(getRepository().getMaxOrder(book) + 1)
                        .description(chapter.getDescription())
                        .timeDuration(getUploadService().getAudioDuration(upload.getId()))
                        .build()
        );

    }

    default void updateFields(ChapterDto chapterDto) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase()+"_UPDATE_FIELDS", "BookId: " + chapterDto.getBookId() + ", Title: " + chapterDto.getTitle() + ", Description: " + chapterDto.getDescription());
        Chapter chap = this.findById(chapterDto.getId()).orElseThrow(() -> new RuntimeException("chapter not found"));
        Chapter.ChapterBuilder builder = chap.toBuilder();
        if (StringUtils.isNotBlank(chapterDto.getTitle())) {
            builder.title(chapterDto.getTitle());
        }
        if (StringUtils.isNotBlank(chapterDto.getDescription())) {
            builder.description(chapterDto.getDescription());
        }
        this.save(builder.build());
    }
}
