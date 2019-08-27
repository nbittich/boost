package tech.artcoded.boost.book.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.user.entity.User;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "chapter_history")
public class ChapterHistory extends Auditable<String> {

    @Id
    @GeneratedValue
    @Column(name = "chapter_histoy_id")
    private Long id;

    @Version
    private Long version;

    @Column(name = "chapter_history_current_time")
    private Double currentTime;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "chapter_history_chapter_id", referencedColumnName = "chapter_id")
    //@JsonIgnore
    private Chapter chapter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chapter_history_user_id", referencedColumnName = "usr_id")
    @JsonIgnore
    private User user;

    public Long getChapterId(){
        return chapter.getId();
    }


    public Long getBookId(){
        return chapter.getBookId();
    }


}
