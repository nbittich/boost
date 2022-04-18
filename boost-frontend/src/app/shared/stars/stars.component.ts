import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Star } from '@core/models/star';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;

  @Input()
  public star: Array<Star> = [];

  @Output()
  public updateStar: EventEmitter<Star> = new EventEmitter();

  public inputStar: Star = new Star();

  editMode: boolean;

  @Input()
  public editable: boolean;

  constructor() {}

  ngOnInit() {}

  getIcon(i: number) {
    if (!this.star || !this.star.length) {
      return ['fas', 'star'];
    }

    let temp: number =
      this.star
        .map((s) => s.star)
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }) / this.star.length;
    return this.getIconFromCurr(i, temp);
  }

  getIconFromCurr(i: number, curr: number) {
    if (!curr) {
      return ['fas', 'star'];
    }
    let st = Math.round(curr * 2) / 2;
    if (st < i) {
      if (st + 0.5 === i) {
        return ['fas', 'star-half-alt'];
      } else {
        return ['fas', 'star'];
      }
    } else {
      return ['fas', 'star'];
    }
  }

  updateRating(i: number) {
    let s = new Star();
    s.star = i;
    this.inputStar = s;
  }

  emitVote() {
    if (!this.inputStar.star) {
      this.inputStar.star = 0;
    }
    this.updateStar.emit(this.inputStar);
    this.inputStar = new Star();
    this.editMode = !this.editMode;
  }
}
