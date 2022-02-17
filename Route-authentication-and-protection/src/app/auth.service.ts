import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { config } from 'config';
import { AuthResponse } from './appinterface/auth-response.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(email: any,password: any){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}',
    {
      email: email,
      password: password,
      returnSecureToken: true
    });

  }
}
