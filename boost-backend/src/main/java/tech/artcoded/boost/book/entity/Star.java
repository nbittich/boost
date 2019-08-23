package tech.artcoded.boost.book.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.user.entity.User;

import javax.persistence.*;

@Data
@ToString(exclude = {"book","chapter"})
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "star")
public class Star extends Auditable<String> {


    @Id
    @GeneratedValue
    @Column(name = "stars_id")
    private Long id;

    @Column(name = "stars_star")
    private Double star;

    @Version
    private Long version;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "usr_id")
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "book_id")
    @JsonIgnore
    private Book book;
}
