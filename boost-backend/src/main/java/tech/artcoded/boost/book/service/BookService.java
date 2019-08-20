package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import tech.artcoded.boost.book.dto.BookDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;

import java.util.Optional;

public interface BookService extends CrudService<Long, Book> {

    UploadService getUploadService();

    @SneakyThrows
    default Book saveBookWithCover(BookDto book) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase()+"_SAVE_WITH_COVER", "Title: " + book.getTitle() + ", ContentType: " + book.getContentType());
        Optional<Book> optionalBook = this.findById(book.getId());


        final Book.BookBuilder bookE = optionalBook.
                map(Book::toBuilder)
                .orElseGet(Book::builder)
                .id(optionalBook.map(Book::getId).orElse(null));
        Optional.ofNullable(book.getCover()).ifPresent(c -> {
            try {
                if (c.length > 0) {
                    Upload upload = getUploadService().upload(c, book.getContentType(), book.getFileName());
                    bookE.cover(upload);
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        return getRepository().save(
                bookE.author(book.getAuthor())
                        .title(book.getTitle())
                        .category(book.getCategory())
                        .description(book.getDescription())
                        .build()
        );

    }
}
