import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  async loginWithUsernameAndPassword() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      username: this.username,
      password: this.password,
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    try {
      let resp = await fetch( environment.baseUrl + '/login/', requestOptions);
      let json = await resp.json();
      localStorage.setItem('token', json.token)  
    } catch(e){
     console.log(e);
     
    }
  }


  login(){
    
  }


}
