import { Injectable } from '@angular/core';
import { Course } from '../../models/course/Course'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly apiUrl = "http://localhost:5102/"

  constructor(private http: HttpClient) { }
  
  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiUrl}api/Course`);
  }

  getRecentCoursesByCategory(category: string): Observable<Course[]>{
    const encodedCategory = encodeURIComponent(category);
    return this.http.get<Course[]>(`${this.apiUrl}api/Course/${encodedCategory}`)
  }

  getCourseById(id: string): Observable<Course>{
    return this.http.get<Course>(`${this.apiUrl}api/Course/${id}`);
  }

}
