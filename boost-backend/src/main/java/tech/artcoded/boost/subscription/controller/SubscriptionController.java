package tech.artcoded.boost.subscription.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import tech.artcoded.boost.subscription.entity.Notification;
import tech.artcoded.boost.subscription.entity.Subscription;
import tech.artcoded.boost.subscription.service.NotificationService;
import tech.artcoded.boost.subscription.service.SubscriptionService;
import tech.artcoded.boost.user.config.security.CheckAuthenticationUtil;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.nio.file.AccessDeniedException;
import java.security.Principal;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/subscription")
@Slf4j
public class SubscriptionController {

    private final UserService userService;
    private final SubscriptionService subscriptionService;
    private final NotificationService notificationService;
    private final CheckAuthenticationUtil checkAuthenticationUtil;
    private final ObjectMapper objectMapper;
    private final ExecutorService executorService = Executors.newWorkStealingPool();
    @Getter
    private final Environment env;

    @Autowired
    public SubscriptionController(UserService userService, SubscriptionService subscriptionService, NotificationService notificationService, ObjectMapper objectMapper, Environment env) {
        this.userService = userService;
        this.subscriptionService = subscriptionService;
        this.notificationService = notificationService;
        this.objectMapper = objectMapper;
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
        User subscriber = userService.principalToUser(principal);
        notificationService.findAllUnreadByUser(subscriber).forEach(n->{
            this.notificationService.save(n.toBuilder().received(false).build());
        });
        SseEmitter emitter = new SseEmitter();
        emitter.onTimeout(emitter::complete);
        emitter.onCompletion(emitter::complete);
        emitter.onError(err -> {
            log.error("an exception occurred",err);
            emitter.completeWithError(err);
        });
        executorService.execute(() -> {
                for (;;) {
                    if (checkAuthenticationUtil.getAuthentication(request) == null){
                        emitter.completeWithError(new AccessDeniedException("not logged in"));
                        executorService.shutdown();
                        break;
                    }else{
                        final List<Notification> notifications = notificationService.findAllUnreadAndUnreicevedByUser(subscriber);
                        if (!notifications.isEmpty()){
                            notifications.stream().filter(n-> !n.isReceived()).forEach(n->{
                                this.notify(emitter, this.notificationService.save(n.toBuilder().received(true).build()));
                            });
                        }
                    }
                    this.sleep(10);
                }
        });
        return emitter;
    }

    private void  notify(SseEmitter sseEmitter, Object object){
        try{
            sseEmitter.send(object);
        }catch (Exception ex){
            sseEmitter.completeWithError(ex);
        }
    }
    @SneakyThrows
    private void sleep(long seconds){
        TimeUnit.SECONDS.sleep(seconds);
    }

}
