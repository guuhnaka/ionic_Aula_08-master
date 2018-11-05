/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';




@Injectable()
export class MovieProvider {
  private baseApiPath = 'https://api.themoviedb.org/3';
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/latest?api_key='
    + this.getApiKey());
    }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='
    + this.getApiKey());
    }

  getApiKey(): string{
    return '539baf8760cbac004e9ead94bc31113a';
    }

  getGenres() {
    return this.http.get(this.baseApiPath + '/genre/movie/list?api_key='
      + this.getApiKey());
  }

}
