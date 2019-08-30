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
