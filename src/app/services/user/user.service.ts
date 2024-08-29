import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest} from '../../models/auth/LoginRequest';
import { LoginResponse } from '../../models/auth/LoginResponse';
import { User } from '../../models/user/User';
import { LocalStorageService } from '../localstorage/local-storage.service';
import { SignupRequest } from '../../models/auth/SignupRequest';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly apiUrl = "http://localhost:5102/"
  private currentUser: User | null = null;
  
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
      const storedUser = localStorage.getItem('CurrentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
    }
  }

  signup(signupRequest: SignupRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}api/User`, signupRequest)
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}api/User/login`, loginRequest);
  }

  setCurrentUser(loginResponse: LoginResponse): void {
    this.currentUser = loginResponse.user;
    this.localStorage.setItem('UserInfo', JSON.stringify(loginResponse.user));
    this.localStorage.setItem('Token', loginResponse.token);
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('UserInfo');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }

  logout(): void {
    this.localStorage.clear();
  }

  isLogged(): boolean {
        const token = this.getToken();
        if(!token) {
          return false} 
      return true;
  }

  private getToken = ():string|null => this.localStorage.getItem('Token');
}