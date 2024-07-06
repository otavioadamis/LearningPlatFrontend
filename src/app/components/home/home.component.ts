import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private courseService:CourseService) {}
  
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(data => console.log(data));
  }
}
