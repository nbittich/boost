import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public label: string;
  public status: string;
  public message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.queryParamMap);
    this.route
      .queryParams
      .subscribe(params => {
        console.log(params.length);
        this.label = params['label'] || this.label || 'Not Found';
        this.status = params['status'] || this.status || '404';
        this.message = params['message'] || this.message || 'Not found';
      });
  }

}
