package tech.artcoded.boost.upload.service.impl;

import lombok.Getter;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.repository.UploadRepository;
import tech.artcoded.boost.upload.service.UploadService;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class UploadServiceImpl implements UploadService {

    @Getter
    private final UploadRepository repository;
    private final Environment env;

    @Autowired
    public UploadServiceImpl(UploadRepository uploadRepository, Environment env) {
        this.repository = uploadRepository;
        this.env = env;
    }

    @Override
    public Upload upload(byte[] input, String contentType, String fileName) throws Exception {
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
        return this.save(upl);
    }

    private File idToFile(String id) {
        return new File(env.getProperty("boost.upload.dir", id + ".dat"));
    }

    @Override
    public Upload get(String id) throws Exception {
        byte[] file = FileUtils.readFileToByteArray(idToFile(id));
        return this.findById(id)
                .map(u -> u.toBuilder().file(file).build())
                .orElseThrow(FileNotFoundException::new);
    }

    @Override
    public Upload delete(String id) throws Exception {
        Optional<Upload> upload = this.findById(id);
        if (upload.isPresent()) {
            Upload u = upload.get();
            FileUtils.forceDelete(idToFile(id));
            repository.delete(u);
            log.info("upload with id {} removed", id);
            return u;
        }
        throw new RuntimeException("unexpected error when deleting" + id);
    }

    @Override
    @SneakyThrows
    public long getAudioDuration(String id) {
        AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(idToFile(id));
        AudioFormat format = audioInputStream.getFormat();
        long frames = audioInputStream.getFrameLength();
        double durationInSeconds = (frames + 0.0) / format.getFrameRate();
        return Math.round(durationInSeconds * 1000);
    }
}
