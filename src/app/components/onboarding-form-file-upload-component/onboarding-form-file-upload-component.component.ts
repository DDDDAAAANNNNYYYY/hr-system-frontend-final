import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnboardingFormServiceService } from 'src/app/services/onboarding-form-service.service';
import { UploadService } from 'src/app/services/upload.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-onboarding-form-file-upload-component',
  templateUrl: './onboarding-form-file-upload-component.component.html',
  styleUrls: ['./onboarding-form-file-upload-component.component.css']
})
export class OnboardingFormFileUploadComponentComponent implements OnInit {
  private _subscription_user_kind: any;
  selectedFiles: FileList;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, 
    private onboardingFormServiceService : OnboardingFormServiceService, 
    private AuthServiceService : AuthServiceService, 
    private uploadservice :UploadService) { }

  ngOnInit(): void {
  }
  uploadAvadar() {
    const file = this.selectedFiles.item(0);
    this.uploadservice.uploadFileAvadar(file);
    
    
    
    this.onboardingFormServiceService.submitAvadar().subscribe((data)=>{
      console.log("submit sucessful");
      // console.log(this.onboardingForm);
     
     
      
    })
    // console.log(localStorage.getItem("test")); 
    
    alert("upload sucessful");

  }
  uploadDriverLiscen() {
    const file = this.selectedFiles.item(0);
    this.uploadservice.uploadFileDriverLicense(file);
    ;
    this.onboardingFormServiceService.submitDriverLicense().subscribe((data)=>{
      console.log("submit sucessful");
    })
    
    
    // console.log(localStorage.getItem("test")); 
    
    alert("upload sucessful");

  }
  uploadWorkAuth() {
    const file = this.selectedFiles.item(0);
    this.uploadservice.uploadFileWorkAuth(file);
    ;
    this.onboardingFormServiceService.submitWorkAUth().subscribe((data)=>{
      console.log("submit url sucessful");
    }) ;
    
    // console.log(localStorage.getItem("test")); 
    
    alert("upload sucessful");

  }

  // onSubmit(){
  //   this.AuthServiceService.sendInfo(this.model.username, this.model.password).subscribe(
  //     data=>{
  //       localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
  //       // this.currentUsername=this.model.username;
  //       // localStorage.setItem("currentUsername", this.model.username);

  //       this.AuthServiceService.sendToken(localStorage.getItem("token")||"").subscribe(
  //         data=>{
  //           //store personal info here
  //           this.currentUsername=this.model.username;
  //           localStorage.setItem("currentUsername", this.model.username);
  //         }

  //       )
  //     }
  //   )
  // }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
