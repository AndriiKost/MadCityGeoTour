import { Injectable } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeoObjectService {

  constructor(
    public http: HttpClient
  ) { }

  getUserObjects(): Observable<GeoObject[]> {
    const url ='http://localhost:8000/profile';

    return this.http.get<GeoObject[]>(url)
    .pipe(
      catchError(this.handleError('getUserObjects', []))
    );

  }

  getAllObjects(): Observable<GeoObject[]> {
    const url = 'http://localhost:8000/geo-objects/';

    return this.http.get<GeoObject[]>(url)
              .pipe(
                catchError(this.handleError('getAllObjects', []))
              );
  }

  // Handle Errors
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
