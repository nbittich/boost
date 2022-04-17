import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from "@env/environment";
import {Subject} from "rxjs";
import {EventSourcePolyfill} from 'event-source-polyfill';

/**
 * @author Nordine Bittich
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public userEvent = new Subject<any>();

  constructor(private http: HttpClient) {
  }


  notificationConnect(callback, error=err=> console.log(err)): void {
    let source = new EventSourcePolyfill(environment.backendUrl+'/notification/notify',{
      headers: this.getTokenHeader()
    });
    source.addEventListener('error', error);
    source.addEventListener('message', message => {
      if(!this.isLoggedIn()){
        console.log('logged out');
        source.close();
      }
      callback(message);
    });
  }

  autoLogin(sendEvent=false) {
    this.http.request<any>('post', environment.backendUrl + '/user/info' , {}).subscribe(
      (datas) => {
        this.setUser(datas,sendEvent);
      },
      (err) => {
        console.log(err);
      },
      () => {
      });

  }

  setUser(datas, sendEvent=true){
    localStorage.setItem('user', JSON.stringify(datas));
    if (sendEvent)
        this.userEvent.next("login");
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
          this.setUser(resp.body);
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

  public hasRight(entityFromUser) {
    return (entityFromUser || {username: 'ERROR'}).username === (this.getUser() || {username: 'ANONYMOUS'}).username;
  }

  public hasAnyRole(...expected:string[]){
    return expected.filter(e => this.hasRole([e])).length > 0;
  }

  logout() {
    localStorage.removeItem('xAuthToken');
    localStorage.removeItem('user');
    this.userEvent.next("logout");
  }

  isLoggedIn(){
      return this.getUser() !== null;
  }

  getTokenHeader() {
    const xAuthToken = localStorage.getItem('xAuthToken');
    if (xAuthToken && xAuthToken.length) {
          return {'x-auth-token': `${xAuthToken}`};
    }else {
      console.log('not authenticated');
      this.logout();
      return null;
    }
  }
}
