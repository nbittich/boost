package tech.artcoded.boost.upload.service;

import tech.artcoded.boost.upload.entity.Upload;

public interface UploadService {
    Upload save(byte[] input, String contentType, String fileName) throws Exception;
    Upload get(String id) throws Exception;
    Upload delete(String id) throws Exception;
}
