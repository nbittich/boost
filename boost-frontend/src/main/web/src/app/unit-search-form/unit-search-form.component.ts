import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-unit-search-form',
  templateUrl: './unit-search-form.component.html',
  styleUrls: ['./unit-search-form.component.css']
})
export class UnitSearchFormComponent implements OnInit {
  @Input() searchResponseCallback;
  public searchFormVisible = false;

  public criteria = {};

  constructor() {
  }

  ngOnInit() {
  }

}
