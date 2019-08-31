package tech.artcoded.boost.subscription.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.common.entity.Auditable;
import tech.artcoded.boost.user.entity.User;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "subscription")
public class Subscription extends Auditable<String> {

    @Version
    private Long version;

    @Id
    @Column(name = "subscription_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "subscription_subrcriber_id", referencedColumnName = "usr_id")
    private User subscriber;



    @ManyToOne
    @JoinColumn(name = "subscription_following_id", referencedColumnName = "usr_id")
    private User following;

}