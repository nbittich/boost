import {Component, OnInit} from '@angular/core';
import { ImagePreview } from '@core/models/image.preview';
import {AuthenticationService} from "@service/authentication.service";
import { ProfileService } from '@service/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  loading: boolean;
  profile: any;
  private profilePictureChanged: boolean;
  followingCount: number=0;
  followerCount: number=0;

  constructor(private authenticationService: AuthenticationService, private profileService:ProfileService) { }

  ngOnInit() {
    this.user = this.authenticationService.getUser();
    let profileCopy = this.user.profile || {};
    this.profile = {
      firstName: profileCopy.firstName,
      lastName: profileCopy.lastName,
      birthdate: profileCopy.birthdate,
      bio: profileCopy.bio
    };
    this.authenticationService.userEvent.subscribe(event => {
      if (event === 'logout') {
        this.user = null;
      } else {
        this.user=this.authenticationService.getUser();
      }
    });
    this.profileService.countFollowers((datas)=>{
      this.followerCount=datas;
    });
    this.profileService.countFollowing((datas)=>{
      this.followingCount=datas;
    });
  }

  updateProfilePicture($event: ImagePreview) {
    this.profilePictureChanged = true;
    this.profile.file = btoa($event.imgURL.split(',')[1]);
    this.profile.fileName = $event.fileName;
    this.profile.contentType= $event.contentType;
    console.log(this.profile);
  }

  saveProfile() {
    console.log("save profile...", this.profile);
    let birthdate = this.profile.birthdate;
    this.loading = true;
    this.profileService.updateProfile(this.profile, (datas)=>{
      this.authenticationService.autoLogin();
      setTimeout(()=>{
        this.loading = false;
      },1000);
    })
  }
}
