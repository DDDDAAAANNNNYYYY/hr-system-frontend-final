import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import{userFile} from 'src/app/model/userFile';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles: FileList;
  returnVal: userFile;
  
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }
 
  uploadWorkAuth() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFileWorkAuth(file)
    ;
    
    // console.log(this.returnVal);
     
    
    alert("upload sucessful");
  }

  uploadDriverLicense() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFileDriverLicense(file)
    ;
    
    // console.log(this.returnVal);
    
    
    alert("upload sucessful");
  }
  // Data = this.uploadService.getMydata();
  // consolelog(Data);
  
  uploadAvatar() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFileAvadar(file);
    ;
    
    console.log(this.returnVal);
    // console.log(localStorage.getItem("test")); 
    
    alert("upload sucessful");
  }
  
  
  

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}