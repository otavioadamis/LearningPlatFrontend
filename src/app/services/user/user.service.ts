import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../models/auth/LoginRequest';
import { LoginResponse } from '../../models/auth/LoginResponse';
import { User } from '../../models/user/User';
import { LocalStorageService } from '../localstorage/local-storage.service';
import { SignupRequest } from '../../models/auth/SignupRequest';
import { jwtDecode } from "jwt-decode";
import { JwtProps } from '../../models/auth/JwtProps';

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
    return this.http.post<LoginResponse>(`${this.apiUrl}api/User`, signupRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}api/User/login`, loginRequest);
  }

  logout(): void {
    this.localStorage.clear();
  }

  isLogged(): boolean {
    const token = this.getToken();
    if (!token) { return false }
    return true;
  }

  getUserByAuthToken(): Observable<User> | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const userId = this.decodeTokenReturnId(token);
    return this.http.get<User>(`${this.apiUrl}api/User/${userId}`);
  }
 
  setToken(token: string): void {
    this.localStorage.setItem('Token', token);
  }

  getToken = (): string | null => this.localStorage.getItem('Token');

  private decodeTokenReturnId(token: string): string | undefined {
    if (!token) { return; }
    const decode = jwtDecode<JwtProps>(token);
    return decode.id;
  }

}