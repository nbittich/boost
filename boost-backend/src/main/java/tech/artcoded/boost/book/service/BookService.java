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
        Optional<Book> optionalBook = this.findById(book.getId());
        Upload upload = getUploadService().upload(book.getCover(), book.getContentType(), book.getFileName());
        return getRepository().save(
                optionalBook.map(Book::toBuilder).orElseGet(Book::builder)
                        .id(optionalBook.map(Book::getId).orElse(null))
                        .cover(upload)
                        .title(book.getTitle())
                        .category(book.getCategory())
                        .description(book.getDescription())
                        .build()
        );

    }
}
