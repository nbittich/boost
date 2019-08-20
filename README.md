#Kafka:
- kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic boostevent
- kafka-console-consumer --bootstrap-server localhost:9092 --topic boostevent --from-beginning
-  curl -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \
   -d @eventSchema.json \
    http://localhost:8081/subjects/boostevent/versions
-  connect-standalone /etc/schema-registry/connect-avro-standalone.properties /home/artcoded/kafka/worker/boostevent-sink.properties
#Create database:
- docker run --name boost-postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=boostdb -e POSTGRES_USER=postgres -p 5432:5432 -d postgres