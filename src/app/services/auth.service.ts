import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _router: Router) { }
  baseUpiUrl : string = environment.baseApiUrl; 

  public register(user: user): Observable<any>{
    // console.log("registered");
    
    return this.http.post<user>(this.baseUpiUrl + '/api/Auth/register' , user);
  }

  public login(user: user): Observable<string>{
    return this.http.post(this.baseUpiUrl + '/api/Auth/login' , user , { responseType: 'text'});
  }

  public logout(){
    localStorage.removeItem('authToken')
    this._router.navigate(['login'])
  }

  public loggedin(){
    return !!localStorage.getItem('authToken')
  }

  public getMe(): Observable<string>{
    return this.http.get(this.baseUpiUrl + '/api/Auth/getuserclaim', { responseType: 'text'});
  }
}
