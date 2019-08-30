package tech.artcoded.boost.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.user.entity.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
