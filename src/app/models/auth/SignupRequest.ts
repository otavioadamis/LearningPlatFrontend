export class SignupRequest {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;

    constructor(email: string, name:string, password: string, confirmPassword:string) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
      }
}