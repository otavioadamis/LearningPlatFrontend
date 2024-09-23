import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { SignupRequest } from '../../../models/auth/SignupRequest';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginResponse } from '../../../models/auth/LoginResponse';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  
  form = new FormGroup({   
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirmPassword: new FormControl(null, Validators.required),
  },
  {
    validators: this.passwordMatchValidator,
  }
);

  constructor(private userService: UserService, private router: Router){
  }

  passwordMatchValidator(control: AbstractControl){
    return control.get('password')?.value === control.get('confirmPassword')?.value? null: {'mismatch': true};
  }

  onSignup(): void {
    if(this.form.invalid){
      console.log("form invalido");
      return;
    }

    const email = this.form.get('email')!.value;
    const name = this.form.get('name')!.value;
    const password = this.form.get('password')!.value;
    const confirmPassword = this.form.get('confirmPassword')!.value;

    if (email === null || name === null || password === null || password === null || confirmPassword === null) {
      console.error("Form controls returned null values");
      return;
    }

    const signupReq = new SignupRequest(email, name, password, confirmPassword);

    this.userService.signup(signupReq).subscribe(
      (res: LoginResponse) => {
        this.userService.setToken(res.token);
        this.router.navigateByUrl('');
      }, error => {
        console.log(error);
      }
    )
  }
}
