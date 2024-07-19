import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest} from '../../models/auth/LoginRequest';
import { LoginResponse } from '../../models/auth/LoginResponse';
import { User } from '../../models/user/User';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly apiUrl = "http://localhost:5102/"
  private currentUser: User | null = null;
  
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}api/User/login`, loginRequest);
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): void {
    localStorage.removeItem('Token')
  }

  isLogged(): boolean {
      if(isPlatformBrowser(this.platformId)){
        const token = this.getToken();
        if(!token) {
          return false}
      }
      return true;
  }

  private getToken = ():string|null => localStorage.getItem('Token')
}