import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model = {
    'username':'',
    'password':'',
    'email': ''
  };
  
  constructor(private registerService: RegisterServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
      this.model.email = this.activatedRoute.snapshot.queryParams['email'];
      // alert(this.activatedRoute.snapshot.queryParams['email']);
      // alert(this.activatedRoute.snapshot.queryParams['token']);
      localStorage.setItem("token",this.activatedRoute.snapshot.queryParams['token']);
    });
  }

  onSubmit(){
    console.log("register");
    this.registerService.sendInfo(this.model.username, this.model.password, this.model.email).subscribe(
      data=>{
        console.log(this.model.email);
        this.router.navigate(['/onboardingform'], {queryParams : {email : this.model.email}});
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}