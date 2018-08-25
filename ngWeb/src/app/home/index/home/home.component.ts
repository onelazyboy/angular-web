import { Component, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../../service/user.service';
import { ServicesProvider } from '../../../service/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  datas = [];
  iswork = false;
  getDataSub;

  constructor(public http: Http, public userService: UserService, private appService: ServicesProvider) {
    this.getdata();
    this.getDataSub = this.userService.home_get_data.subscribe(() => {
      this.getdata();
    });
  }

  ngOnDestroy() {
    this.getDataSub.unsubscribe();
  }

  ngOnInit() {
  }

  // 获取数据
  getdata() {
    if (this.iswork) {
      return;
    }
    this.iswork = true;
    const url = 'articles';

    this.appService.httpGet(url, 'len=' + this.datas.length).subscribe((res) => {
      this.iswork = false;
      this.datas = this.datas.concat(res);
    });
  }

  sendShare() {
    this.userService.show_send_share.emit();
  }

  sendQue() {
    this.userService.show_send_que.emit();
  }

}
