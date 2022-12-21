import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router ,CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private _authservice: AuthService, private router: Router){}
 
  canActivate(): boolean {
   
    if(this._authservice.loggedin()){
      return true
    }
    else{
      this.router.navigate(['login'])
      return false
    }
  }
}
