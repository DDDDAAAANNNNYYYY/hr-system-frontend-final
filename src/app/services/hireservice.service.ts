import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnboardingForm } from '../model/OnboardingForm';

@Injectable({
  providedIn: 'root'
})
export class HireserviceService {
  

  constructor(private http : HttpClient) { }
  private onboardingformurl = '/api/getOnboardingForm';
  private invitation='/api/sendEmail';
  data={'email':''};
  



  

  loadOnboardingForms() : Observable<OnboardingForm[]>{
    return this.http.get<OnboardingForm[]>(this.onboardingformurl);
  }


  sendEmail(myemail:string):Observable<any> {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.email=myemail;
    console.log("email"+ myemail);
      
    return this.http.post(this.invitation, this.data, {responseType: 'text'});
}
}
