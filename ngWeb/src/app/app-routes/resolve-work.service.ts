import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ServicesProvider } from '../service/services';

@Injectable()
export class ResolveWorkService implements Resolve<any> {

  data:any = {};
  _id;

  constructor( public http:Http, public router: Router, private appService : ServicesProvider) {
    console.log("######################");
   }

  resolve(route: ActivatedRouteSnapshot){ 
    this._id = route.params['id'];
    return  this.appService.httpGet("articles/article","articleId="+this._id).subscribe((res)=>{
      if(res[0] != undefined){
        return  res[0];
      }else{
        this.router.navigate(['/404']);
      }      
    })
  }

}
