package tech.artcoded.boost.upload.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.upload.entity.Upload;

public interface UploadService extends CrudService<String, Upload> {
    Upload upload(byte[] input, String contentType, String fileName) throws Exception;
    Upload get(String id) throws Exception;
    Upload delete(String id) throws Exception;

    long getAudioDuration(String id);
}
