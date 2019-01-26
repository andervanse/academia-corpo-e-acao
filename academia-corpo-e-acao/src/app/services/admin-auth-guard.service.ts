import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminAuthGuardService {

  constructor(public auth: AuthService, public router: Router) {}
  
  canActivate(): boolean {
    if (!this.auth.isAuthenticated() && this.auth.isAdmin()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
