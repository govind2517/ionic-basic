import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  username:string | undefined;
  password:string | undefined;

  logMeIn(){
    // code for login in user goes here
    console.log(this.username);
    console.log(this.password);
    if(this.username && this.username.length >= 5 
      && this.password && this.password.length >= 5){
        if(this.username == 'admin' && this.password == 'admin123'){
          this.router.navigate(['/home']);
        }
      }
    else{
      this.router.navigate(['/']);
    }
  }

}
