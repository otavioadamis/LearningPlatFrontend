import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../models/course/Course';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];
  constructor(private courseService:CourseService) {}
  
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      data => this.courses = data
    );
  }
}
