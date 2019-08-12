import {Component, OnInit} from '@angular/core';
import {ProcessingUnit} from '../processing.unit';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../login/authenticationservice';
import {Router} from '@angular/router';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  public detail: ProcessingUnit = null;
  public editMode = false;
  public units: any;
  public currentPage: number;

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    this.getUnits(1);
  }

  ngOnInit() {
  }

  hasRole(expected) {
    return this.authenticationService.hasRole([expected]);
  }
  navigate(unit, editMode) {
    this.router.navigateByUrl('/unit/' + unit.id + '/' + editMode);
  }

  edit(unit) {
    this.detail = unit;
    this.editMode = true;
  }
  delete(unit) {
    this.http.request<any>('delete', environment.backendUrl+'/processing-unit',{ body: unit }).subscribe(
      (datas) => {
        console.log(datas);
        this.getUnits(1);
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getUnits(event: number) {
    this.http.get<any[]>(environment.backendUrl+'/processing-unit?page=' + (event-1 ), {}).subscribe(
      (datas) => {
        this.units = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  isLoggedIn() {
    return this.authenticationService.getUser() !== null;
  }

   searchCallback() {
    let that = this;
    return async (criteria) => {
      criteria.from = new Date(criteria.from).getTime();
      criteria.to = new Date(criteria.to).getTime();
      this.units = null;
      await that.http.request<any>('post', environment.backendUrl+'/processing-unit/search',{ body: criteria }).subscribe(
        (datas) => {
          console.log(datas);
          that.units = datas;
        },
        (err) => {
          alert("an error occured. check the console for further details");
          console.log(err);
        },
        () => {
        },
      );
    }
  }
}
