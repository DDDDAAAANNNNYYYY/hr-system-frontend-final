import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VisaChange } from '../model/VisaChange';

@Injectable({
  providedIn: 'root'
})
export class VisaServiceService {

  private submitUrl = '/api/changeVisaStatus';
  private getUrl = '/api/getVisaStatus';
  private getNotificationUrl = '/api/getNotification';
  private submitDocurl = '/api/submitDoc';

  constructor(private http : HttpClient) { }
  urldata:any;
  username:any;
  filename:any;
  data={
    'url':'',
    'name':'',
    'file':''
  }

  submitForm(data) {
    console.log(data);
    alert("HR is notified, please wait");
    return this.http.post<VisaChange>(this.submitUrl, data);
  }
 
  submitDoc() {
    let headers1=new Headers({'Content-type':"application/json"});
    this.data.url=sessionStorage.getItem("document");
    this.data.name = localStorage.getItem("currentUsername");
    this.data.file = this.filename;

    // if(this.filename!="I-20"){
    //   this.filename="I983";
    // }
    // this.data.file=this.filename;
    console.log(this.data);

    return this.http.post(this.submitDocurl, this.data, {responseType: 'text'});
  }
  

  getCurrentVisaStatus(data){
    return this.http.post(this.getUrl, data,{responseType: 'text'});
  }
  getNotification(data){
    return this.http.post(this.getNotificationUrl, data,{responseType: 'text'});
  }
}
