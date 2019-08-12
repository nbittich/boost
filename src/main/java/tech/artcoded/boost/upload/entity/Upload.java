package tech.artcoded.boost.upload.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.common.entity.Auditable;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Upload extends Auditable<String> {

    @Version
    private Long version;

    @Id
    private String id;

    private String pathLocation;

    private String contentType;
    private String fileName;

    @Transient
    private byte[] file;


}
