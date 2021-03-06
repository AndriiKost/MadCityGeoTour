import { Injectable } from '@angular/core';
import { GeoObject } from '../models/GeoObject.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeoObjectService {

  // public url = 'http://localhost:8000';
  public url = 'https://madcitygeotour.herokuapp.com';

  constructor(
    public http: HttpClient
  ) { }

  getUserObjects(): Observable<GeoObject[]> {
    // const url = 'http://localhost:8000/profile';
    // const url = 'https://madcitygeotour.herokuapp.com/profile';

    return this.http.get<GeoObject[]>(`${this.url}/profile`)
    .pipe(
      catchError(this.handleError('getUserObjects', []))
    );

  }

  getObjectsDetails(id: string): Observable<any> {
    // const url = `http://localhost:8000/geo-objects/${id}`;
    // const url = 'https://madcitygeotour.herokuapp.com/profile';

    return this.http.get<any>(`${this.url}/geo-objects/${id}`)
    .pipe(
      catchError(this.handleError('getObjectsDetails', []))
    );

  }

  getAllObjects(): Observable<GeoObject[]> {
    // const url = 'http://localhost:8000/geo-objects/';
    // const url = 'https://madcitygeotour.herokuapp.com/geo-objects/';

    return this.http.get<GeoObject[]>(`${this.url}/geo-objects/`)
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
