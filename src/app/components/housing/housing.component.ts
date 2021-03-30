import { Component, OnInit } from '@angular/core';
// import { Facility } from 'src/app/model/Facility';
import { FacilityReport } from 'src/app/model/FacilityReport';
import { HouseDetail } from 'src/app/model/HouseDetail';
import { FacilityReportServiceService } from 'src/app/services/facility-report-service.service';
// import { FacilityServiceService } from 'src/app/services/facility-service.service';
import { HouseServiceService } from 'src/app/services/house-service.service';
import { FacilityReportandDetails } from 'src/app/model/FacilityReportandDetails';
import { Router } from '@angular/router';


@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})

export class HousingComponent implements OnInit {
  houseDetail : any;
  facilityReportandDetail = [];
  username = localStorage.getItem('currentUsername');

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

  constructor(private houseService : HouseServiceService, private facilityReportService : FacilityReportServiceService, private router: Router) { }

  ngOnInit(): void {
    this.houseService.loadHouseDetail(localStorage.getItem('currentUsername')).subscribe((data) => {
      console.log(data);
      this.houseDetail = data;
      console.log(this.houseDetail);
    });

    this.facilityReportService.loadFacilityReport(localStorage.getItem('currentUsername')).subscribe((data) => {
      this.facilityReportandDetail = data;
      console.log(data);
    });
  }
  addFacilityReport(){
    console.log(this.addFacilityReportModel.title);
    console.log(this.addFacilityReportModel.description);
    this.addFacilityReportModel.username = localStorage.getItem('currentUsername');

    console.log(this.addFacilityReportModel.username);

    this.facilityReportService.addFacilityReport(this.addFacilityReportModel.title, this.addFacilityReportModel.description, this.addFacilityReportModel.username);
    // window.location.reload();
    this.facilityReportandDetail.push(
      {
        'facilityReport':{
          'title' : this.addFacilityReportModel.title,
          'description': this.addFacilityReportModel.description,
          'reportDate' : new Date().toISOString(),
          'status' : 'open'
        },
        'username': this.addFacilityReportModel.username,
        'details':[]
      }
    );
  }

  addComment(reportID: string, comment:string, username: string){
    console.log(reportID);
    console.log(comment, username);
    this.facilityReportService.addComment(reportID, comment, username).subscribe(
      data => {
      console.log(data);
      window.location.reload();
    });
  }

}