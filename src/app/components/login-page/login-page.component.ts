import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../../models/auth/LoginRequest';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

loginReq: LoginRequest;  

constructor(private userService: UserService) {
  this.loginReq = new LoginRequest();
}

onLogin(): void {
  this.userService.login(this.loginReq);
}

}
