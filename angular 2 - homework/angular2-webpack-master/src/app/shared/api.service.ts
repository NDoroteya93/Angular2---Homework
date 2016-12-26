import { Injectable } from '@angular/core';

import { MYFILMS_TOP_API, MYFILMS_ID_API  } from './api-constants';
import { Http, Response, Headers, RequestOptions,
              Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IMovies } from '../movies/movie';

@Injectable()
export class ApiService {
  private headers: Headers;
  private params: URLSearchParams;

  constructor(private jsonp: Jsonp) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Accept', 'application/json');

    this.params = new URLSearchParams();
    this.params.set('token', '7bdedc66-ba55-47b0-9c1d-1c677d3b4142');
    this.params.set('format', 'json');
    this.params.set('data', '1');
    this.params.set('callback', 'JSONP_CALLBACK');
  }

  // constructor(private _http: Http) { }

  getMovies(startPages: any, endPages: any): Observable<IMovies[]> {
    this.params.set('start', startPages);
    this.params.set('end', endPages);

    return this.jsonp.get(MYFILMS_TOP_API, { search: this.params, headers: this.headers})
      .map(response => <IMovies[]>response.json().data.movies)
      .catch(this.handleError);
  }

getMovieById(id: any): Observable<IMovies> {
    this.params.set('idIMDB', id);
    return this.jsonp.get(MYFILMS_ID_API, { search: this.params, headers: this.headers })
      .map(response => <IMovies>response.json().data.movies[0])
      .catch(this.handleError);
  }

  getMoviesTop10(): Observable<IMovies[]> {
    this.params.set('start', '1');
    this.params.set('end', '10');
    return this.jsonp.get(MYFILMS_TOP_API, { search: this.params, headers: this.headers })
      .map(response => <IMovies[]>response.json().data.movies)
      .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

