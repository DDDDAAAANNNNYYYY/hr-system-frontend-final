import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  registerurl : string = "/api/saveuser";
  data = {
    'username':'',
    'password':'',
    'email': ''
  }

  constructor(private http: HttpClient, private router: Router) { }

  sendInfo(username:string, password:string, email: string):Observable<any> {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.password=password;
    this.data.username=username;
    this.data.email = email;   
    return this.http.post(this.registerurl, this.data);
}

}