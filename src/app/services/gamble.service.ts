import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GambleModel } from '../models/gamble.model';

@Injectable({
  providedIn: 'root'
})
export class GambleService {

  private url = 'localhost:3000';
  constructor( private http: HttpClient ) {
   }

   getGambleByParams(params): any {
     return this.http.get(`${ this.url }/gamble${ params }`);
   }
}
