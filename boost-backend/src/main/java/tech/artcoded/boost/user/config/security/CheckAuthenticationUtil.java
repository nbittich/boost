package tech.artcoded.boost.user.config.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import tech.artcoded.boost.user.dto.Role;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Objects.requireNonNull;
@FunctionalInterface
public interface CheckAuthenticationUtil {
    Logger logger = LoggerFactory.getLogger(CheckAuthenticationUtil.class);

    Environment getEnvironment();

    default UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request){
        String token = request.getHeader("X-Auth-Token");
        if (StringUtils.isNotEmpty(token) && token.startsWith(getEnvironment().getProperty("jwt.prefix"))) {
            byte[] signingKey = requireNonNull(getEnvironment().getProperty("jwt.secret")).getBytes();
            try {
                Jws<Claims> parsedToken = Jwts.parser()
                        .setSigningKey(signingKey)
                        .parseClaimsJws(token.replace("Bearer ", ""));

                String username = parsedToken
                        .getBody()
                        .getSubject();

                List<GrantedAuthority> authorities = ((List<?>) parsedToken.getBody()
                        .get("rol")).stream()
                        .map(String::valueOf)
                        .map(role -> Role.builder().role(Role.RoleType.valueOf(role)).build())
                        .collect(Collectors.toList());

                if (StringUtils.isNotEmpty(username)) {
                    return new UsernamePasswordAuthenticationToken(username, null, authorities);
                }
            } catch (Exception e) {
                logger.trace("error occured while authorization phase ", e);
            }
        }

        return null;
    }
}
