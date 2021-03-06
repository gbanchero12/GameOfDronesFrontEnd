import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GambleService {

  private url = 'http://localhost:3000';
  constructor( private http: HttpClient ) {
   }

   getGambleByParams(params): any {
     return this.http.get(`${ this.url }/gamble${ params }`);
   }
}
