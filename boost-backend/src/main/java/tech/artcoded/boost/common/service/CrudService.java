package tech.artcoded.boost.common.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import tech.artcoded.boost.common.kafka.KafkaEventProducer;

import java.util.List;
import java.util.Optional;

public interface CrudService<K, V> {
    JpaRepository<V, K> getRepository();

    KafkaEventProducer getEventProducer();

    default Optional<V> findOneById(K id) {
        return getRepository().findById(id);
    }

    default List<V> findAll(Sort var1) {
        return getRepository().findAll(var1);
    }

    default List<V> findAllById(Iterable<K> var1) {
        return getRepository().findAllById(var1);
    }

    default void flush() {
        getRepository().flush();
    }

    default V saveAndFlush(V var1) {
        return getRepository().saveAndFlush(var1);
    }

    default void deleteInBatch(Iterable<V> var1) {
        getRepository().deleteInBatch(var1);
    }

    default void deleteAllInBatch() {
        getRepository().deleteAllInBatch();
    }

    default V getOne(K var1) {
        return getRepository().getOne(var1);
    }

    default List<V> findAll(Example<V> var1) {
        return getRepository().findAll(var1);
    }

    default List<V> findAll(Example<V> var1, Sort var2) {
        return getRepository().findAll(var1, var2);
    }

    default Page<V> findAll(Pageable var1) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase() + "_FIND_ALL", "page: " + var1.getPageNumber());
        return getRepository().findAll(var1);
    }

    default V save(V var1) {
        return getRepository().save(var1);
    }

    default Iterable<V> saveAll(Iterable<V> var1) {
        return getRepository().saveAll(var1);
    }

    default Optional<V> findById(K id) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase() + "_FIND_BY_ID", "id: " + id.toString());
        return id == null ? Optional.empty() : getRepository().findById(id);
    }

    default boolean existsById(K var1) {
        return getRepository().existsById(var1);
    }

    default Iterable<V> findAll() {
        return getRepository().findAll();
    }

    default long count() {
        return getRepository().count();
    }

    default void deleteById(K var1) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase() + "_DELETE_BY_ID", "id: " + var1.toString());
        getRepository().deleteById(var1);
    }

    default void delete(V var1) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase() + "_DELETE", "id: " + var1.toString());
        getRepository().delete(var1);
    }

    default void deleteAll(Iterable<V> var1) {
        getEventProducer().sendEvent(getClass().getSimpleName().toUpperCase() + "_DELETE_ALL", "ids: " + var1.toString());
        getRepository().deleteAll(var1);
    }

    default void deleteAll() {
        getRepository().deleteAll();
    }

    default Optional<V> findOne(Example<V> var1) {
        return getRepository().findOne(var1);
    }

    default Page<V> findAll(Example<V> var1, Pageable var2) {
        return getRepository().findAll(var1, var2);
    }

    default long count(Example<V> var1) {
        return getRepository().count(var1);

    }

    default boolean exists(Example<V> var1) {
        return getRepository().exists(var1);
    }
}
