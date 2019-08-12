Create database:
docker run --name boost-postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=boostdb -e POSTGRES_USER=postgres -p 5432:5432 -d postgres