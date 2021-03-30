import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {

  private url = '/api/houseDetail';
  constructor(private http: HttpClient) { }

  loadHouseDetail(data){
    return this.http.post(this.url,data);
  }
}