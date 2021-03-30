import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userInfo } from './../model/userInfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  token:string = "";
    loginurl: string= "/auth/login";
    tokenurl: string= "/auth/checkLogin";
    constructor(private http:HttpClient, private router: Router){      
    }
    data={
        'username':'',
        'password':''
    }

    sendInfo(username:string, password:string):Observable<any> {
        let headers1=new Headers({'Content-type':"application/json"});
        this.data.password=password;
        this.data.username=username;   
        return this.http.post(this.loginurl, this.data, {responseType: 'text'});
    }
    sendToken(token:string):Observable<any>{    
        this.token=token;
        const params = new HttpParams({
          fromString: token
        });
        const findhttpOptions = {
          headers: new HttpHeaders({'content-Type': 'application/json'}),
          params: params
        };
        return this.http.post(this.tokenurl,findhttpOptions,{responseType: 'text'});
    }

    isLoggedin(){
      return !!localStorage.getItem("token");
    }
    getToken() {
      return localStorage.getItem('token')
    }

    getUsername() : string{
      return localStorage.getItem('currentUsername');
    }

    isHR(){
      return localStorage.getItem('currentUsername') === 'HR';
    }
    logoutUser(){
      localStorage.clear();
      this.router.navigate(['/login']);
    }
}
