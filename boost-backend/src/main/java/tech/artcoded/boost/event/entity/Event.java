package tech.artcoded.boost.event.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "event")
public class Event {
    private static final ObjectMapper INTERNAL_MAPPER = new ObjectMapper();

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

    @Column (nullable = true,name = "event_attributes")
    @Type(type="org.hibernate.type.BinaryType")
    @JsonIgnore
    @Lob
    private byte[] attributes;

    @SneakyThrows
    public Map<Object,Object> getJsonAttributes(){
        return INTERNAL_MAPPER.readValue(attributes, Map.class);
    }
}
