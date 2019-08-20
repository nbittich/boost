package tech.artcoded.boost.event.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "event")
public class Event {

    @Column(name = "created_date")
    private long createdDate;

    @Version
    private Long version;

    @Id
    @Column(name = "event_id")
    private String id;

    @Column(name = "event_name")
    private String name;

    @Column(name = "event_value",length = 512)
    private String value;
}
