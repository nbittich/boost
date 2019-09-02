package tech.artcoded.boost.subscription.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.user.entity.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "notification")
public class Notification extends Auditable<String> {

    public enum NotificationType{
        BOOK,CHAPTER, SUBSCRIPTION,UPLOAD, STAR
    }
    @Version
    private Long version;

    @Id
    @Column(name = "notification_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @ManyToMany
    @JoinTable(
            name = "notification_users",
            joinColumns = @JoinColumn(name = "usr_id"),
            inverseJoinColumns = @JoinColumn(name = "notification_id"))
    @JsonIgnore
    private Set<User> users = new HashSet<>();


    @Column(name = "notification_title")
    private String title;
    @Column(name = "notification_description")
    private String description;
    @Column(name = "notification_entity_id")
    private Long targetEntityId;

    private boolean read;

}