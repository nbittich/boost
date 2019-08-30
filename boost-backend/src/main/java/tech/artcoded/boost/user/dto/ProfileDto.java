package tech.artcoded.boost.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
}
