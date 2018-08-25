import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from '../service/message.service';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServicesProvider {

  rong_data: EventEmitter<number>;
  // httpPostT :any = db;

  baseUrl: String;
  url = '/webapi/v1/';
  constructor(public http: HttpClient, private messageService: MessageService) {
  }


  httpGet(ur, params) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    });
    return this.http.get<any>(this.url + ur + '?' + params, { headers: headers }).pipe(
      catchError(this.handleError(ur, []))
    );
  }

  httpPost(ur, params) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    });
    return this.http.post(this.url + ur, params, { headers: headers })
      .pipe(map((response: Response) => {
        return response;
      }))
      .pipe(catchError(this.handleError(ur, [])));
  }

  httpDelete(tb, params) {
    return this.http.delete(this.url + tb, params)
      .pipe(map((response: Response) => response.json()))
      .pipe(catchError(this.handleError('', [])));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
