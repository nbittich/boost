package tech.artcoded.boost.common.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.common.dto.EventDto;

import java.nio.ByteBuffer;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

@Service
@Slf4j
public class KafkaEventProducer {

    private final KafkaTemplate<String, EventDto> kafkaTemplate;
    private final ObjectMapper objectMapper;
    private final Environment env;

    @Autowired(required = false)
    public KafkaEventProducer(KafkaTemplate<String, EventDto> kafkaTemplate, ObjectMapper objectMapper, Environment env) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
        this.env = env;
    }

    public void sendEvent(String name, String value) {
        sendEvent(name,value, Collections.emptyMap());
    }

    public void sendEvent(String name, String value, Map attrs) {
      CompletableFuture.runAsync(()-> {
          if (env.getProperty("boost.kafka.enabled",Boolean.class)){
              EventDto event = new EventDto();
              //event.setEventName(name);
              ByteBuffer attributes = null;
              try {
                  attributes = ByteBuffer.wrap(objectMapper.writeValueAsBytes(attrs));
              } catch (JsonProcessingException e) {
              }

              event.setEventAttributes(attributes);
              event.setEventValue(value);
              event.setCreatedDate(System.currentTimeMillis());
              event.setEventId(UUID.randomUUID().toString());
              log.info("sending event.");
              kafkaTemplate.send(env.getProperty("boost.event.topic"), event);
          }else  {
              log.warn("kafka disabled");
          }
        });
    }
}
