import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authenticationservice';
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Slugify} from "../common/slugify";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

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
  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.returnUrl = '';
    this.actRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '';
    });
    this.fetchCurrentChap();
    this.authenticationService.userEvent.subscribe(value => {
      if(value === 'login') {
        this.fetchCurrentChap();
      }
    })
  }

  public fetchCurrentChap(){

    if(this.isLoggedIn()) {
      this.http.get<any[]>(environment.backendUrl + '/user/chapter/current', {}).subscribe(
        (datas) => {
          this.currentChapter = datas;
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
    }
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }


  getUpdateCurrentTimeUrl(){
    if (this.currentChapter && this.currentChapter.chapter)
      return`/user/chapter/${this.currentChapter.chapter.id}/current-time?time=`;
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
    let link = '/books/' + Slugify.slugify(this.currentChapter.chapter.title) + '/' + this.currentChapter.chapter.bookId + '/' + 'view';
    return link;
  }
}
