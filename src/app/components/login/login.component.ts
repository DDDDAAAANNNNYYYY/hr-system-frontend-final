// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/model/User';
// import { AuthServiceService } from './../../services/auth-service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   username: string;
//   password: string;
//   // user = {}
//   user : User;

//   constructor(private auth: AuthServiceService) { 
//   }

//   ngOnInit(): void {
   
//   }
//  onSubmit(){
//     this.loginService.sendInfo(this.model.username, this.model.password).subscribe(
//       data=>{
//         localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
//         // this.currentUsername=this.model.username;
//         // localStorage.setItem("currentUsername", this.model.username);

//         this.loginService.sendToken(localStorage.getItem("token")||"").subscribe(
//           data=>{
//             //store personal info here
//             this.currentUsername=this.model.username;
//             localStorage.setItem("currentUsername", this.model.username);
//           }

//         )
//       }
//     )
//   }

  // login(){
  //   // console.log("login");
  
  //   // console.log(this.username);
  //   // console.log(this.password);
   
  //   this.auth.login(this.user)
  //   .subscribe((data) =>
  //     {
  //       console.log(data)
  //       sessionStorage.setItem('token', data.token);
  //     },
  //     (error : HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }


  
//}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './../../services/auth-service.service';

@Component({
  selector: 'app-login', //reference
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    'username':'',
    'password':''
  };
  private currentUsername:any;

  isLoggedin : boolean;

  
  constructor(private auth:AuthServiceService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

 onSubmit(){
    console.log("enterhere");
    this.auth.sendInfo(this.model.username, this.model.password).subscribe(
      data=>{
        console.log("token we get=" + data);
        localStorage.setItem("token", data);
        // console.log("localstorage token : " + localStorage.getItem('token'));
        // if (localStorage.getItem('token') != null && localStorage.getItem('token') != "") {
      
        // }
        this.currentUsername=this.model.username;
        // this.currentUsername=this.model.username;
        // localStorage.setItem("currentUsername", this.model.username);
       
        this.auth.sendToken(data).subscribe(
          data=>{
            //store personal info here
            console.log(data);
            console.log(this.currentUsername);
            console.log("token in storage" + localStorage.getItem("token"));
            this.currentUsername=this.model.username;
            localStorage.setItem("currentUsername", this.model.username);

            if (localStorage.getItem('token') != null && localStorage.getItem('token') != "") {
              this.isLoggedin = true;
              console.log("here");
              this.router.navigate(['/dashboard']);
              console.log("after");
            } else {
              alert("wrong username/password");
            }
          }
        )
      }
    );
  }
}


