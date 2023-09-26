import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news.model';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiKey = '89d974cd0d564cbba82ba44519d1b956';


  constructor(private http: HttpClient) { }

  httpOptions = {
  };

  getNews(page: string): Observable<News> {
    return this.http.get<News>(`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&pageSize=20&page=${page}&apiKey=${this.apiKey}`,
      this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
