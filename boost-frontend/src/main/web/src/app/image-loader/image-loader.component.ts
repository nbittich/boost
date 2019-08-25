import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../login/authenticationservice";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Input()
  public customClass:string="img-fluid ";
  @Input()
  public imageId: string;
  @Input()
  public width: string="100%";
  @Input()
  public height: string="100%";

  public imageBase64: any;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService,
              private location: Location,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    let url = environment.backendUrl + '/upload/' + this.imageId;
    this.http.get(url, {responseType: 'blob'}).subscribe(
      (datas) => {
        const reader = new FileReader();
        reader.readAsDataURL(datas);
        reader.onloadend = () => {
          this.imageBase64 = reader.result;
        };
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

}
