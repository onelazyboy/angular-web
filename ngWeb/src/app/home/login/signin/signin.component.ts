import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import {ServicesProvider} from '../../../service/services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  name: '';
  pass: '';

  constructor(public http: Http, public router: Router, private appService: ServicesProvider) { }

  ngOnInit() {
  }

  login() {

    if (!this.name || !this.pass) {
      alert('兄弟，你在搞笑吗？认真填...');
      return true;
    }

    this.appService.httpGet('register', 'name=' + this.name + '&pass=' + this.pass).subscribe((res) => {
        try {
          console.log(res);
          if (res[0]['userId']) {
            localStorage.setItem('user', JSON.stringify(res[0]));
            this.router.navigate(['index']);
          }
        } catch (error) {
          alert('账户或密码错误...');
        }
      });
  }

}
