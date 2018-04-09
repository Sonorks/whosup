import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import { User } from '../_models/User';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  sendRegister(user: User){
    let data = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    headers.set('Accept','application/json');
    headers.set('Access-Control-Allow-Origin','*');
    return this.http.post('http://192.168.0.20:8765/api/actor/registerUser',data,{headers:headers});
  }

}
