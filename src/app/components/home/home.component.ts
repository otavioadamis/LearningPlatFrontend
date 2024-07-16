import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CourseService } from '../../services/course/course.service';
import { Course } from '../../models/course/Course';
import { CardComponent } from '../card/card.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, TabsComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  tabs: string[] = ['C#', 'Javascript', 'Java', 'Python']
  courses: Course[] = [];
  selectedCategory: string = "C#"; 
  
  constructor(private courseService:CourseService) {}
  
  ngOnInit(): void {
    this.getCourses(this.selectedCategory);
  }

  onCategoryClick(selectedTab: number): void {
    this.selectedCategory = this.tabs[selectedTab];
    this.getCourses(this.selectedCategory);
  }

  getCourses(category: string): void {
    this.courseService.getRecentCoursesByCategory(category).subscribe(
      data => this.courses = data
    );
  }
}
