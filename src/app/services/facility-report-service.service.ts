import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacilityReportandDetails } from '../model/FacilityReportandDetails';

@Injectable({
  providedIn: 'root'
})
export class FacilityReportServiceService {

  addCommentsModel = {
    'comment':'',
    'username':'',
    'reportID':'',
  };

  editCommentModel = {
    'reportDetailID':'',
    'comment':'',
  };

  addFacilityReportModel = {
    'title':'',
    'description':'',
    'username':''
  };

  private getfacilityReporturl = "api/facilityReport";
  private addFacilityReportUrl = "api/facilityAddReport";
  private addCommentUrl = "api/facilityReportAddComment";
  constructor(private http: HttpClient) { }

  loadFacilityReport(data) : Observable<FacilityReportandDetails[]>{
    return this.http.post<FacilityReportandDetails[]>(this.getfacilityReporturl, data);
  }

  addFacilityReport(title:string, description:string, username: string){
    let headers1=new Headers({'Content-type':"application/json"});
    this.addFacilityReportModel.title = title;
    this.addFacilityReportModel.description = description;
    this.addFacilityReportModel.username = username;
    return this.http.post(this.addFacilityReportUrl, this.addFacilityReportModel,{responseType:'text'});
  }
  addComment(reportID: string, comment:string, username: string) {
    this.addCommentsModel.comment = comment;
    this.addCommentsModel.username = username;
    this.addCommentsModel.reportID = reportID;
    return this.http.post(this.addCommentUrl, this.addCommentsModel, {responseType : 'text'});
    
  }
}
