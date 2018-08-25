import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import {ServicesProvider} from '../../../service/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: any = '';
  nickname: any = '';
  pass: any = '';

  constructor(public http: Http, public router: Router, private appService: ServicesProvider) { }

  ngOnInit() {
  }

  regist() {
    if (this.name.length < 1 || this.pass.length < 1 || this.nickname.length < 1) {
      alert('兄弟，你在搞笑吗？认真填...');
      return true;
    }

    // tslint:disable-next-line:max-line-length
    this.appService.httpPost('register', '{"name" :"' + this.name + '","pass":"' + this.pass + '","nickname":"' + this.nickname + '"}').subscribe((res) => {
        try {
          console.log(res);
          if (res['userId']) {
            localStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['index']);
          }
        } catch (error) {
          alert('注册失败，账号可能已存在');
        }
      });
  }

}
