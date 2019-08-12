package tech.artcoded.boost.upload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.artcoded.boost.upload.entity.Upload;

@Repository
public interface UploadRepository extends JpaRepository<Upload, String> {
}
