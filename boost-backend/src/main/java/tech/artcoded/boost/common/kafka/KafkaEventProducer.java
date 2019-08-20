package tech.artcoded.boost.common.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.common.dto.EventDto;

import java.util.concurrent.CompletableFuture;

@Service
@Slf4j
public class KafkaEventProducer {

    private final KafkaTemplate<String, EventDto> kafkaTemplate;
    private final ObjectMapper objectMapper;
    private final Environment env;

    @Autowired
    public KafkaEventProducer(KafkaTemplate<String, EventDto> kafkaTemplate, ObjectMapper objectMapper, Environment env) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
        this.env = env;
    }

    public void sendEvent(String name, String value) {
      CompletableFuture.runAsync(()-> {
            EventDto event = new EventDto();
            event.setName(name);
            event.setValue(value);
            log.info("sending event.");
            kafkaTemplate.send(env.getProperty("boost.event.topic"), event);
        });
    }
}
