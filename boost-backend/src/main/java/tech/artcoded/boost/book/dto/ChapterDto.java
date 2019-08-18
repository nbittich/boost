package tech.artcoded.boost.book.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ChapterDto {
    private Long id;
    private Long bookId;
    private String title;
    private int order;
    private String description;
    private byte[] file;
    private String fileName;
    private String contentType;
}
