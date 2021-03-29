import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { NUMBER_RETRIES_OF_REQUESTS, BASE_URL } from '../constansts/constants';
import { MrsoftData } from '../models/mrsof-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getData(): Observable<MrsoftData> {
    return this.http.get<MrsoftData>(BASE_URL).pipe(
      retry(NUMBER_RETRIES_OF_REQUESTS),
      catchError((e) => this.handleError(e))
      );
  }
}



