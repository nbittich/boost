package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import tech.artcoded.boost.book.dto.BookDto;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.repository.BookRepository;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;
import tech.artcoded.boost.user.entity.User;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public interface BookService extends CrudService<Long, Book> {

    UploadService getUploadService();
    BookRepository getRepository();

    @CacheEvict(cacheNames = "bookTop3Stars")
    default void invalidateCacheBookTop3(){
        LoggerFactory.getLogger(getClass()).info("invalidate cache");
    }

    @Cacheable(cacheNames = "bookTop3Stars")
    default List<Book> findTop3ByStars(){
        return getRepository().findAllByPublishedIsTrue()
                .stream()
                .map(book -> book.toBuilder().totalStar(book.getStars().stream().mapToDouble(Star::getStar).average().orElse(0d)).build())
                .sorted(Comparator.comparing(Book::getTotalStar).reversed())
                .limit(3)
                .collect(Collectors.toList());
    }
    default List<Book> findTop3OrOrderByCreatedDateDesc(){
        return getRepository().findTop3ByPublishedIsTrueOrderByCreatedDateDesc();
    }

    default Optional<Book> findByIdAndTitle(Long id, String title) {
        return getRepository().findByIdAndTitle(id,title);
    }

    @Cacheable(cacheNames = "book",key = "#title + #page.pageNumber")
    default Page<Book> findByPublishedIsTrueAndByTitleContainingIgnoreCase(String title, Pageable page) {
        System.out.println("from method");
        return getRepository().findByPublishedIsTrueAndTitleContainingIgnoreCase(StringUtils.trimToEmpty(title),page);
    }

    @SneakyThrows
    @CacheEvict(cacheNames = "book")
    default Book saveBookWithCover(BookDto book, User user) {
        produceEvent("_SAVE_WITH_COVER", "Title: " + book.getTitle() + ", ContentType: " + book.getContentType());
        Optional<Book> optionalBook = Optional.ofNullable(book.getId()).flatMap(id-> this.findByIdAndUser(id,user));

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
                        .user(user)
                        .lang(book.getLang())
                        .category(book.getCategory())
                        .description(book.getDescription())
                        .published(book.isPublished())
                        .build()
        );

    }

    default List<BookRepository.BookTitle> getTitles(){
        return this.getRepository().findByTitleNotNull();
    }

    default Page<Book> findAllByPublishedIsTrue(Pageable pageable){
        return getRepository().findAllByPublishedIsTrue(pageable);
    }
    default Page<Book> findAllByUser(User user, Pageable pageable){
        return getRepository().findAllByUser(user, pageable);
    }

    default Optional<Book> findByIdAndUser(Long bookId, User user){
        return getRepository().findByIdAndUser(bookId,user);
    }
}
