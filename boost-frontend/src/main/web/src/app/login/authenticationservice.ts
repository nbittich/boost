import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";

/**
 * @author Nordine Bittich
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  autoLogin() {
    this.http.request<any>('post', environment.backendUrl + '/user/info' , {}).subscribe(
      (datas) => {
        console.log(datas);
      },
      (err) => {
        console.log(err);
      },
      () => {
      });

  }

  login(username: string, password: string, callBackNext?: any, callbackError?: any, callbackComplete?: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Basic ' + window.btoa(username + ':' + password)
    });
    return this.http.post<any>(environment.backendUrl + '/user/info', {}, {
      headers: headers,
      observe: 'response'
    })
      .pipe(tap(resp => {
        const token = resp.headers.get('X-Auth-Token');
        console.log(token);
        if (token && token.length) {
          localStorage.setItem('xAuthToken', token);
          localStorage.setItem('user', JSON.stringify(resp.body));
        }

        return resp;
      })).subscribe(
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
    ;
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user && user.length ? JSON.parse(user) : null;
  }

  hasRole(expectedRole) {
    const user = this.getUser() || {authorities: [{authority: 'ANONYMOUS'}]};
    const authorities = user.authorities || [{authority: 'ANONYMOUS'}];
    return expectedRole.some(r => authorities.map(a => a.authority.toLowerCase()).includes(r.toLowerCase()));
  }

  logout() {
    localStorage.removeItem('xAuthToken');
    localStorage.removeItem('user');
  }
}
