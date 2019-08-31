package tech.artcoded.boost.user.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tech.artcoded.boost.upload.entity.Upload;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "user_profile")
public class Profile  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_profile_id")
    private Long id;


    @OneToOne
    @JoinColumn(referencedColumnName = "upload_id")
    private Upload profilePicture;

    @Column(name = "user_profile_firstname")
    private String firstName;

    @Column(name = "user_profile_lastname")
    private String lastName;

    @Column(name = "user_profile_birthdate")
    @Temporal(TemporalType.DATE)
    private Date birthdate;

    @Column(name = "user_profile_bio", length = 2048)
    private String bio;
}
