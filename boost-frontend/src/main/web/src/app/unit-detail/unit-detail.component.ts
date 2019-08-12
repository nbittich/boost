import {Component, OnInit} from '@angular/core';
import {ProcessingUnit} from '../processing.unit';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../login/authenticationservice';
import {Location} from '@angular/common';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {
  public unit: ProcessingUnit;
  public editMode;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService,
              private location: Location,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params.id;
      const editMode = params.editMode;
      this.http.request<any>('get', environment.backendUrl + '/processing-unit/' + id, {}).subscribe(
        (datas) => {
          this.unit = datas;
          this.editMode = editMode !== null && editMode !== undefined && editMode === 'edit';
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
    });
  }

  back() {
    this.location.back();
  }

  save() {
    this.http.request<any>('post', environment.backendUrl + '/processing-unit', {body: this.unit}).subscribe(
      (datas) => {
        console.log(datas);
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  ngOnInit() {
  }

  parse(input) {
    try {
      return JSON.parse(input);
    } catch (e) {
      console.log("couldn't parse json.", e);
      return {rawData: input};
    }
  }
}
