import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {PersonalInfo} from "../model/PersonalInfo";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoServiceService {

  private utl = "/auth/personinfo";
  constructor(private http : HttpClient) { }

  loadPerson(data){
    return this.http.post<any>(this.utl,data);
  }
}