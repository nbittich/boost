package tech.artcoded.boost.notification.controller;

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
import tech.artcoded.boost.notification.entity.Notification;
import tech.artcoded.boost.notification.service.NotificationService;
import tech.artcoded.boost.user.config.security.CheckAuthenticationUtil;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.nio.file.AccessDeniedException;
import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/notification")
@Slf4j
public class NotificationController {

    private final UserService userService;
    private final NotificationService notificationService;
    private final CheckAuthenticationUtil checkAuthenticationUtil;

    @Getter
    private final Environment env;

    @Autowired
    public NotificationController(UserService userService, NotificationService notificationService, Environment env) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.env = env;
        this.checkAuthenticationUtil = this::getEnv;
    }

    @GetMapping("/notify")
    public SseEmitter notify(Principal principal, HttpServletRequest request) {
        User subscriber = userService.principalToUser(principal);

        SseEmitter emitter = new SseEmitter();
        emitter.onTimeout(emitter::complete);
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        emitter.onCompletion(executorService::shutdown);
        emitter.onError(err -> {
            log.error("an exception occurred", err);
            emitter.completeWithError(err);
            executorService.shutdown();
        });

        executorService.execute(() -> {
            final Set<Notification> notificationsReceived = new HashSet<>();
            while (checkAuthenticationUtil.getAuthentication(request) != null && !executorService.isTerminated()) {
                final List<Notification> notifications = notificationService.findAllByUser(subscriber);
                if (!notifications.isEmpty()) {
                    notifications.stream().filter(n -> !notificationsReceived.contains(n)).forEach(n -> {
                        this.notify(emitter, n);
                    });
                    notificationsReceived.addAll(notifications);
                }
                this.sleep(10);
            }
            notificationsReceived.clear();
            emitter.completeWithError(new AccessDeniedException("not logged in"));

        });
        return emitter;
    }

    private void notify(SseEmitter sseEmitter, Object object) {
        try {
            sseEmitter.send(object);
        } catch (Exception ex) {
            sseEmitter.completeWithError(ex);
        }
    }

    @SneakyThrows
    private void sleep(long seconds) {
        TimeUnit.SECONDS.sleep(seconds);
    }

}
