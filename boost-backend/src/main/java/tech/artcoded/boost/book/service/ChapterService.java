package tech.artcoded.boost.book.service;

import lombok.SneakyThrows;
import tech.artcoded.boost.book.dto.ChapterDto;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;

public interface ChapterService extends CrudService<Long, Chapter> {
    UploadService getUploadService();

    BookService getBookService();

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
