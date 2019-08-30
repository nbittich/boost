FROM maven:slim
WORKDIR /tmp
COPY . .
RUN mvn clean install -DskipTests
WORKDIR target/
EXPOSE 8070
CMD ["java", "-jar","artcoded-boost.jar"]
