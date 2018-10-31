import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<any> {
    return this.http.get('assets/tasks.json')
      .pipe(
        catchError(error => {
          alert('error');
          return Observable.throw(error);
        })
      );
  }

}
