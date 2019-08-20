package tech.artcoded.boost.event.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.event.entity.Event;

import java.util.concurrent.CompletableFuture;

@Service
@Slf4j
public class KafkaEventProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;
    private final Environment env;

    @Autowired
    public KafkaEventProducer(KafkaTemplate<String, String> kafkaTemplate, ObjectMapper objectMapper, Environment env) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
        this.env = env;
    }

    public void sendEvent(String name, String value) {
        CompletableFuture.runAsync(()-> {
            Event event = Event.builder().name(name).value(value).build();
            try {
                kafkaTemplate.send(env.getProperty("boost.event.topic"), objectMapper.writeValueAsString(event));
            } catch (JsonProcessingException e) {
                log.error("error",e);
            }
        });
    }
}
