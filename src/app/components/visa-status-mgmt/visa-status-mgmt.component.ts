import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userFile } from 'src/app/model/userFile';
import { VisaServiceService } from 'src/app/services/visa-service.service';
import { UploadService } from 'src/app/services/upload.service';
// import{userFile} from 'src/app/model/userFile';
@Component({
  selector: 'app-visa-status-mgmt',
  templateUrl: './visa-status-mgmt.component.html',
  styleUrls: ['./visa-status-mgmt.component.css']
})

export class VisaStatusMgmtComponent implements OnInit {

  visaForm: FormGroup;
  currentVisaStatus: any;
  notification:any;

  selectedFiles: FileList;
 

  constructor(private http: HttpClient,  
    private formBuilder: FormBuilder, 
    private visaservice : VisaServiceService, 
    private uploadservice: UploadService) {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {
    this.visaForm = this.formBuilder.group({
      username : new FormControl(localStorage.getItem('currentUsername')),
      changeStatus : new FormControl('')
    });

    // localStorage.setItem('currentUsername', 'dany');
    
    this.visaservice.getCurrentVisaStatus(localStorage.getItem('currentUsername')).subscribe(
      (data) => {this.currentVisaStatus = data}
      
    )
    this.visaservice.getNotification(localStorage.getItem("currentUsername")).subscribe(
      (data) => {this.notification = data}
    )
  }
  

  onSubmit(f : FormGroup){
    console.log("form is submitted");
    console.log(f.value);
    
    this.visaservice.submitForm(this.visaForm.value).subscribe((data) => {
      console.log("visa form submitted");
    },
    (error : HttpErrorResponse) => {
      console.log(error);
    }
    )
  }
  uploadDoc() {
    const file = this.selectedFiles.item(0);

    if(this.uploadservice.uploadFile(file)==true){
      this.visaservice.submitDoc().subscribe((data)=>{
        console.log("submit url sucessful");
        alert("upload sucessful");

    })
      

    
    
  }
    
    } ;
    
  
    // console.log(localStorage.getItem("test")); 
    
    // alert("upload sucessful");
  // }

  
}
