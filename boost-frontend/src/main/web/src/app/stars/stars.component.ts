import {Component, OnInit} from '@angular/core';
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {far} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  faStar=faStar;
  faStarHalfAlt= faStarHalfAlt;

  public star:number;

  constructor() { }

  ngOnInit() {
    this.star =3.5;
  }

  getIcon(i: number) {
    let st = this.star;
    if(st < i){
      if (st +0.5 === i){
        return ['fas','star-half-alt'];
      }else {
        return ['far','star'];
      }
    }else {
      return ['fas','star'];
    }
  }
}
