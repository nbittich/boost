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
public class Book extends Auditable<String>{

    @Version
    private Long version;

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    @Lob
    private String description;
    private long totalDuration; // probably in millis

}
