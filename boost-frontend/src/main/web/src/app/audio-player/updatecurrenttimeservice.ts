import {ChangeDetectorRef, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";

@Injectable()
export class UpdateCurrentTimeService {

  constructor(private http: HttpClient, private router: Router, private cd:ChangeDetectorRef, private authenticationService: AuthenticationService) {


  }
}
