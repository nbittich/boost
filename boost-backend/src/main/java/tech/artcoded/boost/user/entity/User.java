package tech.artcoded.boost.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.user.dto.Role;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "usr")
public class User implements UserDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "usr_id")
    private Long id;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "usr_roles", joinColumns = @JoinColumn(name = "usr_role_id", referencedColumnName = "usr_id"))
    @Column(name = "usr_role")
    @JsonIgnore
    private Collection<Role> roles = new ArrayList<>();

    private String username;

    @JsonIgnore
    private String password;

    @Override
    @Transient
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @Transient
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }


    @ManyToOne
    @JoinColumn(name = "usr_chapter_id", referencedColumnName = "chapter_id")
    private Chapter currentChapter;


    @OneToOne
    @JoinColumn(referencedColumnName = "user_profile_id")
    private Profile profile;

}
