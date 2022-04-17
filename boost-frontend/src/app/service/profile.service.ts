import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

/**
 * @author Nordine Bittich
 */
@Injectable({providedIn: 'root'})
export class ProfileService {
  public userEvent = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  countFollowing(next:any){
    return this.http.get<any>(environment.backendUrl + '/subscription/following-count', {})
      .subscribe(
        next,
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
  }
  countFollowers(next:any){
    return this.http.get<any>(environment.backendUrl + '/subscription/followers-count', {})
      .subscribe(
        next,
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
  }

  updateProfile(profile: any, callBackNext?: any, callbackError?: any, callbackComplete?: any) {
    return this.http.post<any>(environment.backendUrl + '/user/profile', profile)
      .subscribe(
        (datas) => {
          if (callBackNext) callBackNext(datas);
        },
        (err) => {
          if (callbackError) callbackError(err);
        },
        () => {
          if (callbackComplete) callbackComplete();
        },
      );
  }

}
