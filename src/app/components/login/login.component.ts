
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private auth:AuthService, private router: Router){}

  async login() {
    try {
      let resp = await this.auth.loginWithUsernameAndPassword(this.username, this.password)
      console.log(resp);
      this.router.navigateByUrl('/todos')
    } catch(e){
     alert('Falsche Daten')
     console.log(e);

    }
  }


}
