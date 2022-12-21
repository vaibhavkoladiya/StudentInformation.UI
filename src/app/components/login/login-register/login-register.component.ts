import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  
  user: user = {
    username: '',
    password: '', 
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  

login(user: user) {
  this.authService.login(user).subscribe((token: string) => {
    localStorage.setItem('authToken', token);
    this.router.navigate(['/']);
  });
}

getme() {
  this.authService.getMe().subscribe((name: string) => {
    console.log(name);
    
  });
}

}
