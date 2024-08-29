import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../../models/auth/LoginRequest';
import { UserService } from '../../../services/user/user.service';
import { Router, RouterModule } from '@angular/router';
import { LoginResponse } from '../../../models/auth/LoginResponse';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService, private router: Router) {
}

onLogin(): void {
  
  if(this.form.invalid){
    console.log("form invalido");
    return;
  }

  const email = this.form.get('email')!.value;
  const password = this.form.get('password')!.value;
  
  if (email === null || password === null) {
    console.error("Form controls returned null values");
    return;
  }

  const loginReq = new LoginRequest(email, password);

  this.userService.login(loginReq).subscribe(
    (res:LoginResponse) => {
      this.userService.setCurrentUser(res);
      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }
  );
}
}
