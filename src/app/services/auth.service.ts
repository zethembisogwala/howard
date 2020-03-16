import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'https://howard-api.herokuapp.com/api/register';

  private _loginUrl = 'https://howard-api.herokuapp.com/api/login'

  constructor(private http: HttpClient) { }

  registerUser(user){
  	return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user){
  	return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
