import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OnboardingForm } from '../model/OnboardingForm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingFormServiceService {

  url : string = '/api/saveOnboardingForm';
  private submitDocurl = '/api/submitDoc';
  private submitAvadarurl='/api/submitAvadar';
  data={
    'url':'',
    'name':'',
    'file':''
  }

  constructor(private http : HttpClient) { }

  submitForm(data){
    console.log(data);
   
    return this.http.post<OnboardingForm>(this.url, data);
    //return this.http.get("/auth/login");
  }


  submitAvadar() {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.url=sessionStorage.getItem("Avatar");
    this.data.name = localStorage.getItem("currentUsername");
    this.data.file = "Avadar";

    // if(this.filename!="I-20"){
    //   this.filename="I983";
    // }
    // this.data.file=this.filename;
    console.log(this.data);

    return this.http.post(this.submitAvadarurl, this.data, {responseType: 'text'});
  }

  submitDriverLicense() {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.url=sessionStorage.getItem("DriverLicense");
    this.data.name = localStorage.getItem("currentUsername");
    this.data.file = "DriverLicense";

    // if(this.filename!="I-20"){
    //   this.filename="I983";
    // }
    // this.data.file=this.filename;
    console.log(this.data);

    return this.http.post(this.submitDocurl, this.data, {responseType: 'text'});
  }

  submitWorkAUth() {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.url=sessionStorage.getItem("WorkAuth");
    this.data.name = localStorage.getItem("currentUsername");
    this.data.file = "WorkAuth";

    // if(this.filename!="I-20"){
    //   this.filename="I983";
    // }
    // this.data.file=this.filename;
    console.log(this.data);

    return this.http.post(this.submitDocurl, this.data, {responseType: 'text'});
  }

}
