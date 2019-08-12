package tech.artcoded.boost.user.fixture;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.artcoded.boost.user.dto.Role;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.repository.UserRepository;

import java.util.Arrays;
import java.util.Collections;

import static tech.artcoded.boost.user.dto.Role.RoleType.*;


/**
 * @author nordine bittich
 */
@Configuration
@Profile("dev")
@Slf4j
public class UserFixture implements CommandLineRunner {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final Environment env;

    @Autowired
    public UserFixture(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, Environment env) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.env = env;
    }

    @Override
    public void run(String... args) throws Exception {
        userRepository.deleteAll();
        log.info("save default users");
        Role.RoleBuilder adminRole = Role.builder().role(ADMIN);
        Role.RoleBuilder userRole = Role.builder().role(USER);
        Role.RoleBuilder anonRole = Role.builder().role(ANONYMOUS);
        User admin = userRepository.save(User.builder()
                .username("admin")
                .password(passwordEncoder.encode("1234"))
                .roles(Arrays.asList(adminRole.build(), userRole.build()))
                .build());
        log.info("user saved : {}", admin);
        User user = userRepository.save(User.builder().username("user")
                .roles(Collections.singletonList(userRole.build()))
                .password(passwordEncoder.encode("1234")).build());
        log.info("user saved : {}", user);

    }
}
