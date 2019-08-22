import {Component, Input, OnInit} from '@angular/core';
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {far} from '@fortawesome/free-regular-svg-icons';
import {Star} from "./star";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  faStar=faStar;
  faStarHalfAlt= faStarHalfAlt;

  @Input()
  public star:Array<Star>=[];

  constructor() { }

  ngOnInit() {
  }

  getIcon(i: number) {
    if (!this.star || !this.star.length) {
      return ['far','star'];
    }

    let temp = this.star.map(s=> s.star).reduce((previousValue, currentValue) => {return previousValue + currentValue}) / this.star.length;
    let st = Math.round(temp*2)/2;
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
