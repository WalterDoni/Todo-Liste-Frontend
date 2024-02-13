import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }


public registerNewUser(username: string, email: string, password: string){
  const url = environment.baseUrl + '/register/';
  const body = {
    "username": username,
    "email": email,
    "password": password
  }
return lastValueFrom(this.http.post(url, body))
}
}
