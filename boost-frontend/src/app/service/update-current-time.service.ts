import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "@service/authentication.service";
import {environment} from "@env/environment";

@Injectable({providedIn: 'root'})
export class UpdateCurrentTimeService {

  constructor(private http: HttpClient, private router: Router,  private authenticationService: AuthenticationService) {


  }

  updateTime(url, currentT:number){
    this.http.post<any[]>(environment.backendUrl + url + currentT, {}).subscribe(
      (datas) => {
      },
      (err) => {
      },
      () => {
      },
    );
  }
}
