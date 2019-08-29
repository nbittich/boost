package tech.artcoded.boost.user.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;
import tech.artcoded.boost.user.service.UserService;

import javax.servlet.http.HttpServletResponse;

import static tech.artcoded.boost.user.dto.Role.RoleType.*;

/**
 * @author Nordine Bittich
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().authorizeRequests()


                .antMatchers(HttpMethod.GET, "/event/**").permitAll()

                .antMatchers(HttpMethod.GET, "/user/**").authenticated()
                .antMatchers(HttpMethod.POST, "/user/**").authenticated()

                //.antMatchers(HttpMethod.POST, "/book/rate/**").authenticated()
               // .antMatchers(HttpMethod.POST, "/book/chapter/update/current/**").authenticated()

                .antMatchers(HttpMethod.DELETE, "/book/**").hasAnyAuthority(CONTRIBUTOR.name(),ADMIN.name())
                .antMatchers(HttpMethod.PUT, "/book/**").hasAnyAuthority(ADMIN.name(), USER.name(),CONTRIBUTOR.name())
                .antMatchers(HttpMethod.POST, "/book/**").hasAnyAuthority(ADMIN.name(),CONTRIBUTOR.name(),USER.name())
                .antMatchers(HttpMethod.GET, "/book/**").permitAll()



                .antMatchers(HttpMethod.DELETE, "/upload/**").hasAnyAuthority(CONTRIBUTOR.name(),ADMIN.name())
                .antMatchers(HttpMethod.PUT, "/upload/**").hasAnyAuthority(ADMIN.name(), USER.name(),CONTRIBUTOR.name())
                .antMatchers(HttpMethod.POST, "/upload/**").hasAnyAuthority(ADMIN.name(), USER.name(),CONTRIBUTOR.name())
                .antMatchers(HttpMethod.GET, "/upload/**").permitAll()

                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                .anyRequest().permitAll()
                // csrf
                .and().csrf().disable()

                // http basic
                .httpBasic()
                .realmName("login")

                // exception handling
                .and()
                .exceptionHandling()
                .authenticationEntryPoint((req, resp, e) -> {
                    resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                })
                .and()
                .formLogin().disable()

                // jwt filter
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), eventProducer, env))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), env))

                // stateless
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService)
                .passwordEncoder(passwordEncoder())
        ;
    }

    @Autowired
    Environment env;

    @Autowired
    private UserService userService;

    @Autowired
    private KafkaEventProducer eventProducer;
}

