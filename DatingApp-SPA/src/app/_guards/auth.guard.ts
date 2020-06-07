import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ){}
  canActivate(): boolean {
    if (this.authservice.loggedIn()){
      return true;
    }
    this.alertify.error('UnAuthorize Access Please login to access this page!');
    this.router.navigate(['/home']);
    return false;
  }
}
