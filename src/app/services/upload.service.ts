import { getLocaleCurrencyCode } from '@angular/common';
import { getParseErrors } from '@angular/compiler';
import { Injectable } from '@angular/core';
// import{userFile} from 'src/app/model/userFile';
import { Observable } from 'rxjs';
import * as S3 from 'aws-sdk/clients/s3';
import { userFile } from '../model/userFile';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})

export class UploadService {

  FOLDER = "test/"+ localStorage.getItem("currentUsername");
  

  constructor() { }

  

  mydata:any;


  uploadFile(file):boolean{
   
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAWNV5S4A3TVRCCYYG',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'bfsteamproject',
          Key: this.FOLDER + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
     bucket.upload(params, function (err, data){
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return this.mydata;
          }
          console.log('Successfully uploaded file.', data);
        
          //return true
          this.mydata = bucket.getSignedUrl;
          sessionStorage.setItem("document", data.Location)
          console.log(localStorage.getItem("document"));
         
        
      });  
      return true;
          
          
  }


  




  uploadFileAvadar(file){
   
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAWNV5S4A3TVRCCYYG',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'bfsteamproject',
          Key: this.FOLDER + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
     return bucket.upload(params, function (err, data){
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return this.mydata;
          }
          console.log('Successfully uploaded file.', data);
          //return true
          this.mydata = bucket.getSignedUrl;
          sessionStorage.setItem("Avadar",data.Location);
         
        //   return mydata;
        
      });        
          
  }
  
   
  
  uploadFileDriverLicense(file){
   
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAWNV5S4A3TVRCCYYG',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'bfsteamproject',
          Key: this.FOLDER + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
     bucket.upload(params, function (err, data){
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return this.mydata;
          }
          console.log('Successfully uploaded file.', data);
          //return true
          this.mydata = data;
          sessionStorage.setItem("DriverLicense",data.Location);
          console.log(this.mydata.Location)
        //   return mydata;
        bucket.getSignedUrl;
      });
    }


    uploadFileWorkAuth(file){
   
        const contentType = file.type;
        const bucket = new S3(
              {
                  accessKeyId: 'AKIAWNV5S4A3TVRCCYYG',
                  secretAccessKey: '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',
                  region: 'us-east-2'
              }
          );
          const params = {
              Bucket: 'bfsteamproject',
              Key: this.FOLDER + file.name,
              Body: file,
              ACL: 'public-read',
              ContentType: contentType
          };
         bucket.upload(params, function (err, data){
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return this.mydata;
              }
              console.log('Successfully uploaded file.', data);
              //return true
              this.mydata = data;
              sessionStorage.setItem("WorkAuth",data.Location);
              console.log(this.mydata.Location)
            //   return mydata;
            
          });
        }
        
}

