package tech.artcoded.boost.subscription.controller;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.service.SubscriptionService;
import tech.artcoded.boost.user.config.security.CheckAuthenticationUtil;
import tech.artcoded.boost.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.nio.file.AccessDeniedException;
import java.security.Principal;
import java.time.LocalTime;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/subscription")
@Slf4j
public class SubscriptionController {

    private final UserService userService;
    private final SubscriptionService subscriptionService;
    private final CheckAuthenticationUtil checkAuthenticationUtil;
    @Getter
    private final Environment env;

    @Autowired
    public SubscriptionController(UserService userService, SubscriptionService subscriptionService, Environment env) {
        this.userService = userService;
        this.subscriptionService = subscriptionService;
        this.env = env;
        this.checkAuthenticationUtil = this::getEnv;
    }

    @GetMapping("/following")
    public List<Subscription> findBySubscriber(Principal principal){
        return subscriptionService.findAllBySubscriber(userService.principalToUser(principal));
    }

    @GetMapping("/followers")
    public List<Subscription> findByFollowing(Principal principal){
        return subscriptionService.findAllByFollowing(userService.principalToUser(principal));
    }

    @GetMapping("/following-count")
    public Long countBySubscriber(Principal principal){
        return subscriptionService.countBySubscriber(userService.principalToUser(principal));
    }

    @GetMapping("/followers-count")
    public Long countByFollowing(Principal principal){
        return subscriptionService.countByFollowing(userService.principalToUser(principal));
    }

    @GetMapping("/notify")
    public SseEmitter streamSseMvc(Principal principal, HttpServletRequest request) {
        SseEmitter emitter = new SseEmitter();
        ExecutorService sseMvcExecutor = Executors.newSingleThreadExecutor();
        sseMvcExecutor.execute(() -> {
            try {
                for (int i = 0; !sseMvcExecutor.isShutdown(); i++) {
                    SseEmitter.SseEventBuilder event = SseEmitter.event()
                            .data("SSE MVC - " + LocalTime.now().toString())
                            .id(String.valueOf(i))
                            .name("sse event - mvc");
                    if (checkAuthenticationUtil.getAuthentication(request) == null){
                        sseMvcExecutor.shutdown();
                        throw new AccessDeniedException("not logged in");
                    }else{

                        emitter.send(event.build());
                    }
                    Thread.sleep(10000);
                }
            } catch (Exception ex) {
                emitter.completeWithError(ex);
            }
        });
        return emitter;
    }

}
