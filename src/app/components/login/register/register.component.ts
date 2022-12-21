import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: user = {
    username: '',
    password: '', 
  };
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(user: user){
   
    this.authService.register(this.user).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['login']); 
    });
}

}
