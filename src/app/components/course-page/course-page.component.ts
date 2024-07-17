import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course/Course';
import { CourseService } from '../../services/course/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.scss'
})
export class CoursePageComponent implements OnInit {

  course!: Course;
  constructor(private courseService:CourseService, private activatedRoute: ActivatedRoute) 
  {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.getCourseById(params['id']);
      }
    })
  }

  ngOnInit(): void {

  }

  getCourseById(id:string): void {
    this.courseService.getCourseById(id).subscribe(data => this.course = data);
  }

}
