#!/usr/bin/env bash
mvn clean install -DskipTests
cd ./boost-backend/
docker build -t artcoded/boost .
