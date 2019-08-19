package tech.artcoded.boost.book.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.upload.entity.Upload;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "book")
public class Book extends Auditable<String> {

    @Version
    private Long version;

    @Id
    @Column(name = "book_id")
    @GeneratedValue
    private Long id;

    @Column(name = "book_title")
    private String title;
    @Column(name = "book_author")
    private String author;

    @Column(name = "book_category")
    private String category;

    @Column(name = "book_description", length = 2048)
    private String description;

    @Column(name = "book_total_duration")
    private long totalDuration; // probably in millis

    @OneToOne
    @JoinColumn(referencedColumnName = "upload_id")
    private Upload cover;

}
