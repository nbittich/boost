package tech.artcoded.boost.user.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Role implements GrantedAuthority {
    public enum RoleType {USER, ADMIN, ANONYMOUS}

    @Enumerated(value = EnumType.STRING)
    @JsonIgnore
    private RoleType role;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Override
    public String getAuthority() {
        return this.getRole().name();
    }
}
