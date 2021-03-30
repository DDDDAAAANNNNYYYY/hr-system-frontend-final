import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingGuardGuard implements CanActivate {
  constructor(private auth: AuthServiceService, private router: Router){
  }
  canActivate(
    ): boolean{
      if (this.auth.getToken() == null || this.auth.getToken() == '') {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
  
}