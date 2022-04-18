package tech.artcoded.boost.user.controller;

import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.artcoded.boost.book.entity.Book;
import tech.artcoded.boost.book.entity.Chapter;
import tech.artcoded.boost.book.entity.ChapterHistory;
import tech.artcoded.boost.book.entity.Star;
import tech.artcoded.boost.book.service.BookService;
import tech.artcoded.boost.book.service.ChapterHistoryService;
import tech.artcoded.boost.book.service.ChapterService;
import tech.artcoded.boost.book.service.StarService;
import tech.artcoded.boost.upload.entity.Upload;
import tech.artcoded.boost.upload.service.UploadService;
import tech.artcoded.boost.user.dto.ProfileDto;
import tech.artcoded.boost.user.entity.Profile;
import tech.artcoded.boost.user.entity.User;
import tech.artcoded.boost.user.service.ProfileService;
import tech.artcoded.boost.user.service.UserService;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * @author Nordine Bittich
 */
@RestController
@CrossOrigin(value = "*", allowedHeaders = "*", exposedHeaders = "x-auth-token")
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final ChapterService chapterService;
    private final ChapterHistoryService chapterHistoryService;
    private final StarService starsService;
    private final BookService bookService;
    private final ProfileService profileService;
    private final UploadService uploadService;


    @Autowired
    public UserController(UserService userService, ChapterService chapterService, ChapterHistoryService chapterHistoryService, StarService starsService, BookService bookService, ProfileService profileService, UploadService uploadService) {
        this.userService = userService;
        this.chapterService = chapterService;
        this.chapterHistoryService = chapterHistoryService;
        this.starsService = starsService;
        this.bookService = bookService;
        this.profileService = profileService;
        this.uploadService = uploadService;
    }


    @PostMapping("/info")
    public User info(Principal principal) {
        return userService.principalToUser(principal);
    }


    @PostMapping("/chapter/update/current")
    @Transactional
    public User updateCurrentChapter(@RequestParam("chapterId") Long chapterId, Principal principal) {
        User user = userService.principalToUser(principal);
        Chapter chapter = chapterService.findById(chapterId).orElseThrow(() -> new RuntimeException("chapter not found"));
        Optional<ChapterHistory> history = chapterHistoryService.findByChapterAndUser(chapter, user);

        if (history.isEmpty()){
            chapterHistoryService.save(ChapterHistory.builder().chapter(chapter).user(user).build());
        }

        return userService.save(user.toBuilder().currentChapter(chapter).build());

    }

    @GetMapping("/chapter/current")
    public ChapterHistory current(Principal principal){
        User user = userService.principalToUser(principal);
        Chapter currentChapter = user.getCurrentChapter();
        return chapterHistoryService.findByChapterAndUser(currentChapter, user).orElse(null);
    }

    @PostMapping("/profile")
    public User updateProfile(Principal principal, @RequestBody ProfileDto profileDto){
        User user = userService.principalToUser(principal);
        Profile.ProfileBuilder profileBuilder = Optional.ofNullable(user.getProfile())
                .map(Profile::toBuilder)
                .orElseGet(Profile::builder)
                .firstName(profileDto.getFirstName())
                .birthdate(profileDto.getBirthdate())
                .bio(profileDto.getBio())

                .lastName(profileDto.getLastName());
        Optional.ofNullable(profileDto.getFile()).ifPresent(c -> {
            try {
                if (c.length > 0 && profileDto.getContentType() != null) {
                    Upload upload = uploadService.upload(c, profileDto.getContentType(), profileDto.getFileName());
                    profileBuilder.profilePicture(upload);
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
        Profile profile = profileService.save(profileBuilder.build());
        return userService.save(user.toBuilder().profile(profile).build());
    }

    @PostMapping("/rate")
    public Map.Entry<String, String> editStar(@RequestParam("bookId") Long bookId, @RequestParam("star") double star, Principal principal) {
        User user = userService.principalToUser(principal);
        Book book = bookService.findById(bookId).orElseThrow(() -> new RuntimeException("book not found"));
        Star stars = starsService.findByBookAndUser(book,user).map(Star::toBuilder)
                .orElseGet(Star::builder)
                .user(user)
                .book(book)
                .star(star)
                .build();
        starsService.updateStar(stars);
        return Maps.immutableEntry("message", String.format("star %s saved or edited", stars.getId()));

    }



    @GetMapping("/books")
    public Page<Book> myBooks(Principal principal, Pageable pageable){
        return bookService.findAllByUser(userService.principalToUser(principal), pageable);
    }

    @GetMapping("/chapter/history")
    @Transactional
    public List<ChapterHistory> getChapterHistoriesForUser(Principal principal) {
        return chapterHistoryService.findTop3ByUserOrderbyIdDesc(userService.principalToUser(principal));
    }

    @PostMapping("/chapter/{id}/current-time")
    @CacheEvict("uploads")
    public ResponseEntity<String> updateCurrentTime(@PathVariable("id") Long chapterId,@RequestParam("time") Double time, Principal principal) throws Exception {
        chapterService.findById(chapterId).ifPresent(chapter -> {
            Optional<ChapterHistory> history = chapterHistoryService.findByChapterAndUser(chapter, userService.principalToUser(principal));
            history.ifPresent(h -> {
                chapterHistoryService.save(h.toBuilder().currentTime(time).build());
            });
        });
        return ResponseEntity.ok("received");
    }

}
