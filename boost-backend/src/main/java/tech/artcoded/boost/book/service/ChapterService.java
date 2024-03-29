package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.repository.ChapterRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;
import tech.artcoded.boost.user.entity.User;

import javax.transaction.Transactional;
import java.util.Optional;

public interface ChapterService extends CrudService<Long, Chapter> {
    UploadService getUploadService();

    ChapterRepository getRepository();

    BookService getBookService();

    @Transactional()
    default Page<Chapter> findByBookId(Long bookId, Pageable pageable) {
        Optional<Book> book = getBookService().findById(bookId);
        return book.map(b -> getRepository().findByBookOrderByOrderAsc(b, pageable)).orElseGet(Page::empty);
    }

    default long getTotalDuration(Book book) {
        return getRepository().getTotalDuration(book);
    }

    @SneakyThrows
    default Chapter saveChapterAndUpload(ChapterDto chapter) {
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

    default Page<Chapter> findByBookIdAndUser(Long id, User user, Pageable pageable){
        Optional<Book> book = getBookService().findByIdAndUser(id,user);
        return book.map(b -> getRepository().findByBookOrderByOrderAsc(b, pageable)).orElseGet(Page::empty);

    }

    @Transactional
    default void publish(ChapterDto chapter, User user){

        Chapter chap = this.saveChapterAndUpload(chapter);
        Book bookUpdated = chap.getBook().toBuilder().totalDuration(this.getTotalDuration(chap.getBook())).build();
        getBookService().save(bookUpdated);
    }
}
