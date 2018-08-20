import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServicesProvider {

  rong_data: EventEmitter<number>;
  // httpPostT :any = db;

  http: any;
  baseUrl: String;
  url = "/webapi/v1/";

  private headers = new Headers({ 'Content-type': 'application/json' ,'Access-Control-Allow-Origin':'*'});
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(public httpC: Http) {
    this.http = httpC;
  }


  httpGet(ur, params) {
    return this.http.get(this.url + ur, { search: params }).map(result => result.json());
  }

  httpPost(ur, params) {
    return this.http.post(this.url + ur, params, this.requestOptions)
      .map(this.extractdata)
      .catch(this.handleError);
  }

  httpDelete(tb, params) {
    return this.http.delete(this.url + tb, params, this.requestOptions)
      .map(this.extractdata)
      .catch(this.handleError);
  }

  private extractdata(res: Response) {
    const body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

}
