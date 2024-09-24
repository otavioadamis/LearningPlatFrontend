import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course/Course';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly apiUrl = "http://localhost:5102/";
  private readonly jwtToken = this.userService.getToken();

  private headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer "+ this.jwtToken
  });

  private httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient, private userService: UserService) {
  }

  enroll(courseId: string): void {
    this.http.post(`${this.apiUrl}api/Course/enroll/${courseId}`, null, this.httpOptions).subscribe(res => console.log(res));
  }
}
