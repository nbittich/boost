import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authenticationservice';
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Slugify} from "../common/slugify";

/**
 * @author Nordine Bittich
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  public username: string;
  public password: string;
  faSignInAlt=faSignInAlt;
  faSignOutAlt=faSignOutAlt;
  private currentChapter: any;

  constructor(private router: Router, private actRoute: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.returnUrl = '';
    this.actRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '';
    });
    this.currentChapter = this.getUser().currentChapter;
    this.authenticationService.userEvent.subscribe(event => {
      console.log(event);
      if (event === 'login') {
       this.currentChapter=this.getUser().currentChapter;
      }
    });
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }


  getUpdateCurrentTimeUrl(){
    if (this.currentChapter)
      return`/user/chapter/${this.currentChapter.id}/current-time?time=`;
    else
      return null;
  }

  getUser() {

    return this.authenticationService.getUser();
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  hasRole(expected) {
    return this.authenticationService.hasRole(expected);
  }

  login() {
    this.authenticationService.login(this.username, this.password, (resp) => {
      console.log(this.returnUrl);
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  getChapterDetailLink() {
    let link = '/books/' + Slugify.slugify(this.currentChapter.title) + '/' + this.currentChapter.bookId + '/' + 'view';
    return link;
  }
}
