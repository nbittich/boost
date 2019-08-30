package tech.artcoded.boost.user.service;

import tech.artcoded.boost.common.service.CrudService;
import tech.artcoded.boost.user.entity.Profile;
import tech.artcoded.boost.user.repository.ProfileRepository;

public interface ProfileService extends CrudService<Long, Profile> {
    ProfileRepository getRepository();
}
