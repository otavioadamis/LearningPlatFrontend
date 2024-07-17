import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest} from '../../models/auth/LoginRequest';
import { LoginResponse } from '../../models/auth/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly apiUrl = "http://localhost:5102/"

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): void {
    this.http.post<LoginResponse>(`${this.apiUrl}api/User/login`, loginRequest).subscribe(data => console.log(data))
  }
}