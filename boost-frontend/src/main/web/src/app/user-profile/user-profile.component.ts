import {Component, OnInit} from '@angular/core';
import {ImagePreview} from "../image-preview/image.preview";
import {AuthenticationService} from "../service/authenticationservice";
import {ProfileService} from "../service/profile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  profile: any;
  private profilePictureChanged: boolean;

  constructor(private authenticationService: AuthenticationService, private profileService:ProfileService) { }

  ngOnInit() {
    this.user = this.authenticationService.getUser();
    let profileCopy = this.user.profile || {};
    this.profile = {
      firstName: profileCopy.firstName,
      lastName: profileCopy.lastName
    };
    this.authenticationService.userEvent.subscribe(event => {
      if (event === 'logout') {
        this.user = null;
      } else {
        this.user=this.authenticationService.getUser();
      }
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
    this.profileService.updateProfile(this.profile, (datas)=>{
      this.authenticationService.autoLogin();
    })
  }
}
