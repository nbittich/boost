package tech.artcoded.boost.subscription.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.service.SubscriptionService;
import tech.artcoded.boost.user.service.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/subscription")
@Slf4j
public class SubscriptionController {

    private final UserService userService;
    private final SubscriptionService subscriptionService;

    @Autowired
    public SubscriptionController(UserService userService, SubscriptionService subscriptionService) {
        this.userService = userService;
        this.subscriptionService = subscriptionService;
    }

    @GetMapping("/following")
    public List<Subscription> findBySubscriber(Principal principal) {
        return subscriptionService.findAllBySubscriber(userService.principalToUser(principal));
    }

    @GetMapping("/followers")
    public List<Subscription> findByFollowing(Principal principal) {
        return subscriptionService.findAllByFollowing(userService.principalToUser(principal));
    }

    @GetMapping("/following-count")
    public Long countBySubscriber(Principal principal) {
        return subscriptionService.countBySubscriber(userService.principalToUser(principal));
    }

    @GetMapping("/followers-count")
    public Long countByFollowing(Principal principal) {
        return subscriptionService.countByFollowing(userService.principalToUser(principal));
    }


}
