import { Component } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private registerService: RegisterServiceService,
    private router: Router
  ) {}

  async register() {
    try {
      let resp: any = await this.registerService.registerNewUser(
        this.username,
        this.email,
        this.password
      );
      console.log('Registration successful:', resp);
      this.router.navigateByUrl('/login');
    } catch (e) {
      console.error('Error during registration:', e);
      alert('Fehler aufgetreten:');
    }
  }

}
