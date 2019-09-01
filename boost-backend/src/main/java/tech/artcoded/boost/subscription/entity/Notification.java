package tech.artcoded.boost.subscription.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.common.entity.Auditable;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
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
            name = "notification_subscription",
            joinColumns = @JoinColumn(name = "subscription_id"),
            inverseJoinColumns = @JoinColumn(name = "notification_id"))
    private Set<Subscription> subscriptions = new HashSet<>();


    @Column(name = "notification_title")
    private String title;
    @Column(name = "notification_description")
    private String description;
    @Column(name = "notification_entity_id")
    private Long targetEntityId;

}