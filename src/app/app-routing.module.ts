import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HousingComponent } from './components/housing/housing.component';
import { HRComponentComponent } from './components/hrcomponent/hrcomponent.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RegisterComponent } from './components/register/register.component';
import { VisaStatusMgmtComponent } from './components/visa-status-mgmt/visa-status-mgmt.component';
import { AuthGuardServiceGuard } from './guard/auth-guard-service.guard';
import { OnBoardingGuardGuard } from './guard/on-boarding-guard.guard';
import {HireComponent} from './hire/hire.component';
import {OnboardingFormFileUploadComponentComponent} from './components/onboarding-form-file-upload-component/onboarding-form-file-upload-component.component';
import { HrGuardGuard } from './guard/hr-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardServiceGuard]},
  { path: 'logout', component: LogoutComponent},
  { path: 'personalinfo', component: PersonalInfoComponent, canActivate:[AuthGuardServiceGuard]},
  { path: 'visa', component: VisaStatusMgmtComponent, canActivate:[AuthGuardServiceGuard]},
  { path: 'housing', component: HousingComponent, canActivate:[AuthGuardServiceGuard]},
  { path: 'onboardingformfileupload', component: OnboardingFormFileUploadComponentComponent, canActivate:[OnBoardingGuardGuard]},
  { path: 'onboardingform', component: HRComponentComponent, canActivate:[OnBoardingGuardGuard]},
  { path: 'hire', component:HireComponent, canActivate:[AuthGuardServiceGuard, HrGuardGuard] },
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
