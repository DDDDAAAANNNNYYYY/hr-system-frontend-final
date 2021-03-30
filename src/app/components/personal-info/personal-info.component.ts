import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from 'src/app/model/PersonalInfo';
import { PersonalInfoServiceService } from 'src/app/services/personal-info-service.service';
import {UploadService} from 'src/app/services/upload.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  providers:[PersonalInfoComponent]
})

export class PersonalInfoComponent implements OnInit {
  // name = "stan";
  // preferredName: string;
  // avatar: File;
  // birthday: Date;
  // age: string;
  // gender: string;
  // SSN: string;

  // primaryAddress: string;
  // secondaryAddress: string;
  // personalEmail: string;
  // workEmail: string;
  // cellPhone: string;
  // workPhone: string;
  // isCitizenOrPerm: string;
  // greenCardOrCitizen: string;
  // workAuth: string;
  // workAuthOtherStart: Date;
  // workAuthOtherEnd: Date;
  // workAuthFile: File;
  // employmentStart: Date;
  // employmentEnd: Date;
  // employmentTitle: string;
  // emergencyContactList:[];
  person:PersonalInfo;
  // url:any;
  // url=this.person.avatar
  
  constructor(private personService : PersonalInfoServiceService
    ,private uploadservice: UploadService) { }

  ngOnInit(): void {
    this.personService.loadPerson(localStorage.getItem('currentUsername')).subscribe((data) => {
      this.person = data;
      if(this.person.avatar == '') {
        this.person.avatar="https://www.w3schools.com/howto/img_avatar.png";

      }
      console.log(data);
      console.log(this.person);
    });

    
    
  }
  // onClickAvatar(){
  //   this.uploadservice.uploadFileAvadar()
  //   // this.person.avatar;
  // }

}