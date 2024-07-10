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
  selectedCategory: string = "C#"; 
  language: string = 'C#';
  constructor(private courseService:CourseService) {}
  
  ngOnInit(): void {
    this.getCourses(this.selectedCategory);
  }

  onCategoryClick(category: string): void {
    this.selectedCategory = category;
    this.language = category;
    this.getCourses(category);
  }

  getCourses(category: string): void {
    this.courseService.getRecentCoursesByCategory(category).subscribe(
      data => this.courses = data
    );
  }
}
