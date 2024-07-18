import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../../models/auth/LoginRequest';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/auth/LoginResponse';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

loginReq: LoginRequest;
constructor(private userService: UserService, private router: Router) {
  this.loginReq = new LoginRequest();
}

onLogin(): void {
  this.userService.login(this.loginReq).subscribe(
    (res:LoginResponse) => {
      localStorage.setItem('Token', res.token);
      this.userService.setCurrentUser(res.user);
      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }
  );
}
}
