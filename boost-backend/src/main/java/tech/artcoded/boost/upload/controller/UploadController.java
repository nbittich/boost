package tech.artcoded.boost.upload.controller;

import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;

import java.util.Map;

@RestController
@RequestMapping("/upload")
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@Slf4j
public class UploadController {

    private final UploadService uploadService;

    @Autowired
    public UploadController(UploadService uploadService) {
        this.uploadService = uploadService;
    }

    @GetMapping("/{id}")
    @Cacheable("uploads")
    public ResponseEntity<Resource> get(@PathVariable("id") String id) throws Exception {
        Upload upload = uploadService.get(id);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(upload.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + upload.getFileName() + "\"")
                .body(new ByteArrayResource(upload.getFile()));
    }


    @DeleteMapping
    public Map.Entry<String, String> delete(@RequestParam("id") String id) {
        uploadService.deleteById(id);
        return Maps.immutableEntry("message", id + " will be removed");
    }


}
