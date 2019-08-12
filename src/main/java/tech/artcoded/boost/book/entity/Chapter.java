package tech.artcoded.boost.book.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.upload.entity.Upload;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Chapter extends Auditable<String> {

    @Id
    @GeneratedValue
    private Long id;

    @Version
    private Long version;
    @Lob
    private String description;
    private String title;
    private long timeDuration; // probably in millis

    private int order; // chapter logical order

    @OneToOne
    private Upload upload;

    @ManyToOne
    private Book book;
}
