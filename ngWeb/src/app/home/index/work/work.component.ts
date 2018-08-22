import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';
import { ServicesProvider } from '../../../service/services';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  data:any = {};
  id:any;
  media:any=[];

  constructor( public activatedRoute: ActivatedRoute, public http:Http, public userService: UserService ,private appService : ServicesProvider) {
    this.userService.scrollToTop.emit();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data)=>{
      this.data = data['data'];
      this.id = this.data['articleId'];
      this.getData();
    });
  }

  getData(){
    this.appService.httpGet("media","articleId="+this.id).subscribe(
      (res)=>{
        if(res != undefined){
          this.media = res;
        }
      }
    )
  }

}
