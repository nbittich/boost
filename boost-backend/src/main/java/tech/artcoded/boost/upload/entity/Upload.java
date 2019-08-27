package tech.artcoded.boost.upload.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.common.entity.Auditable;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "upload")
public class Upload extends Auditable<String> {

    @Version
    private Long version;

    @Id
    @Column(name = "upload_id")
    private String id;

    @Column(name = "upload_path_location")
    private String pathLocation;
    @Column(name = "upload_content_type")
    private String contentType;
    @Column(name = "upload_file_name")
    private String fileName;

    @Transient
    private byte[] file;

    @OneToOne
    @JoinColumn(referencedColumnName = "chapter_id")
    private Chapter chapter;

    @OneToOne
    @JoinColumn(referencedColumnName = "book_id")
    private Book book;


}