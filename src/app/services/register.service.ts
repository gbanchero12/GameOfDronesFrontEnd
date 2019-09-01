import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  register(players) {
    return this.http.post(`${this.url}/register`, players);
  }

}
