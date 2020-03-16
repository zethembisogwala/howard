import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   email = ''
  password = ''


  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  registerUser(){
  	this._auth.registerUser({ email: this.email, password: this.password })
  	.subscribe(
  		res => {
  			console.log(res)
  			localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
  		},
  		err => console.log(err)
  	)
  }

}
