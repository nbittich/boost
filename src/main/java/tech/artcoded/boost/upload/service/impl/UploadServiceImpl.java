package tech.artcoded.boost.upload.service.impl;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.repository.UploadRepository;
import tech.artcoded.boost.upload.service.UploadService;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.FileSystemNotFoundException;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class UploadServiceImpl implements UploadService {

    private final UploadRepository uploadRepository;
    private final Environment env;

    @Autowired
    public UploadServiceImpl(UploadRepository uploadRepository, Environment env) {
        this.uploadRepository = uploadRepository;
        this.env = env;
    }

    @Override
    public Upload save(byte[] input, String contentType, String fileName) throws Exception {
        String id = UUID.randomUUID().toString();
        File file = idToFile(id);
        FileUtils.writeByteArrayToFile(file, input);
        Upload upl = Upload.builder()
                .id(id)
                .contentType(contentType)
                .fileName(fileName)
                .pathLocation(file.getPath())
                .build();
        log.info("upload with id {} will be saved", id);
        return uploadRepository.save(upl);
    }

    private File idToFile(String id){
        return new File(env.getProperty("boost.upload.dir", id + ".dat"));
    }

    @Override
    public Upload get(String id) throws Exception{
        byte[] file=FileUtils.readFileToByteArray(idToFile(id));
        return uploadRepository.findById(id)
                .map(u -> u.toBuilder().file(file).build())
                .orElseThrow(FileNotFoundException::new);
    }

    @Override
    public Upload delete(String id) throws Exception {
        Optional<Upload> upload = uploadRepository.findById(id);
        if(upload.isPresent()) {
            Upload u = upload.get();
            FileUtils.forceDelete(idToFile(id));
            uploadRepository.delete(u);
            log.info("upload with id {} removed", id);
            return u;
        }
        throw new RuntimeException("unexpected error when deleting" + id);
    }

}
