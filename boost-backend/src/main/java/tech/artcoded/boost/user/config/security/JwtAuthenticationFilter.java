package tech.artcoded.boost.user.config.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import tech.artcoded.boost.user.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class JwtAuthenticationFilter extends BasicAuthenticationFilter {
    private final Environment env;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, Environment env) {
        super(authenticationManager);
        this.env = env;
    }

    @Override
    protected void onUnsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException {
        super.onUnsuccessfulAuthentication(request, response, failed);
    }

    @Override
    protected void onSuccessfulAuthentication(HttpServletRequest request,
                                              HttpServletResponse response, Authentication auth) throws IOException {

        User user = (User) auth.getPrincipal();

        List<String> roles = user.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        byte[] signingKey = env.getProperty("jwt.secret").getBytes();

        String token = Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
                .setHeaderParam("typ", env.getProperty("jwt.type"))
                .setIssuer(env.getProperty("jwt.issuer"))
                .setAudience(env.getProperty("jwt.audience"))
                .setSubject(user.getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + env.getProperty("jwt.expire.after", Long.class)))
                .claim("rol", roles)
                .compact();

        response.addHeader("X-Auth-Token", env.getProperty("jwt.prefix") + " " + token);
    }
}
