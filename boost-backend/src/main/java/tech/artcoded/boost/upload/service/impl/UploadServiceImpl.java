package tech.artcoded.boost.upload.service.impl;

import lombok.Getter;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.tritonus.share.sampled.file.TAudioFileFormat;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.repository.UploadRepository;
import tech.artcoded.boost.upload.service.UploadService;

import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Base64;
import java.util.Map;
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
        FileUtils.writeByteArrayToFile(file, Base64.getDecoder().decode(input));
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
        return new File(env.getProperty("boost.upload.dir"), id + ".dat");
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
    public long getAudioDuration(String id) {
        try {
            AudioFileFormat audioFileFormat = AudioSystem.getAudioFileFormat(idToFile(id));
            if (audioFileFormat instanceof TAudioFileFormat) {
                Map<?, ?> properties = audioFileFormat.properties();
                String key = "duration";
                Long microseconds = (Long) properties.get(key);
                return Math.round(microseconds / 1000.00d);
            }else {
                long frames = audioFileFormat.getFrameLength();
                double durationInSeconds = (frames + 0.0) / audioFileFormat.getFormat().getFrameRate();
                return Math.round(durationInSeconds * 1000.00d);
            }

        } catch (UnsupportedAudioFileException e) {
            log.error("unsupported",e);
            return 0;
        } catch (IOException e) {
            log.error("io",e);
            return 0;
        }
    }

    @Override
    @SneakyThrows
    public void deleteAllUploadFiles() {
        log.warn("this action will delete all the files but won't affect the database, use it carefully ");
        File directory = new File(env.getProperty("boost.upload.dir"));
        FileUtils.deleteDirectory(directory);
        directory.mkdir();
    }


}
