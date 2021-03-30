import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {HireserviceService} from 'src/app/services/hireservice.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  
  OnboardingForms=[];

  constructor(private hireservice : HireserviceService) { }

  ngOnInit(): void {
    
    
    this.hireservice.loadOnboardingForms().subscribe((data)=>{
    
        this.OnboardingForms = data;  
        
        console.log(this.OnboardingForms) ;  
    })

    }


  
  email = '';

  onSend(){
    console.log(this.email);
    this.hireservice.sendEmail(this.email).subscribe(
      data=>{
        alert(data);
      }
    )
  }



}
