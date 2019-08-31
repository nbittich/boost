package tech.artcoded.boost.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ProfileDto {
    private Long id;
    private Long userId;
    private String firstName;
    private String lastName;
    private byte[] file;
    private String fileName;
    private String contentType;
    private Date birthdate;
    private String bio;
}
