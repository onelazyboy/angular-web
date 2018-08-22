import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import {ServicesProvider} from '../../../service/services';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router, public http: Http,private appService : ServicesProvider ) {
    this._id = this.router.url.split('/')[2];
    this.getdata();
  }

  getdata() {
    console.log("##############3#");
  
    this.appService.httpGet("articles/article","?articleId="+this._id).subscribe((res) => {
        console.log(this.data["media"]);
        this.data = res;
      });
  }

  ngOnInit() {}


}
