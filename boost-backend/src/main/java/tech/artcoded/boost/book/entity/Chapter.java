package tech.artcoded.boost.book.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.upload.entity.Upload;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "chapter")
public class Chapter extends Auditable<String> {

    @Id
    @GeneratedValue
    @Column(name = "chapter_id")
    private Long id;;

    @Version
    private Long version;
    @Column(name = "chapter_description",length = 1024)
    private String description;
    @Column(name = "chapter_title")
    private String title;
    @Column(name = "chapter_time_duration")
    private long timeDuration; // probably in millis
    @Column(name = "chapter_order")
    private int order; // chapter logical order

    @OneToOne
    @JoinColumn(referencedColumnName = "upload_id")
    private Upload upload;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chapter_book_id", referencedColumnName = "book_id")
    @JsonIgnore
    private Book book;

    public Long getBookId(){
        return book.getId();
    }
}
