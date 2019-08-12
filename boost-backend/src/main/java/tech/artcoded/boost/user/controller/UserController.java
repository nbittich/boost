package tech.artcoded.boost.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import java.security.Principal;

/**
 * @author Nordine Bittich
 */
@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/info")
    public User info(Principal principal) {
        return userService.principalToUser(principal);
    }

}
