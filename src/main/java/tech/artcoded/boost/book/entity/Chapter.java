package tech.artcoded.boost.book.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private byte[] chapterStream;
    @Lob
    private String description;
    private String title;
    private long timeDuration; // probably in millis


    @ManyToOne
    private Book book;
}
