import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HrGuardGuard implements CanActivate {
  constructor(private auth: AuthServiceService, private router:Router){

  }
  canActivate(
    ): boolean{
      if (this.auth.isLoggedin() && (this.auth.getUsername() === 'HR')) {
        console.log("the user is logged in");
        return true;
      }
      console.log("the user is not logged in");
      this.router.navigate(['/login']);
    return false;
  }
  
}
