import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course/Course';
import { CourseService } from '../../../services/course/course.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ChaptersComponent } from '../../chapters/chapters.component';
import { Chapter } from '../../../models/course/Chapter';


@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatTabsModule, MatIconModule, MatExpansionModule, MatCardModule, MatButtonModule, ChaptersComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.scss'
})
export class CoursePageComponent implements OnInit {

  course!: Course;
  chapters!: Chapter[];
  constructor(private courseService:CourseService, private activatedRoute: ActivatedRoute) 
  {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.getCourseById(params['id']);
        this.getChaptersByCourseId(params['id']);
      }
    })
  }

  ngOnInit(): void {
  }

  getChaptersByCourseId(id: string) {
    this.courseService.getAllChaptersByCourseId(id).subscribe(data => {
      this.chapters = data.map(chapter => ({
        ...chapter,
        videos: chapter.videoLessonDTOs
      }));
    });
  }

  getCourseById(id:string): void {
    this.courseService.getCourseById(id).subscribe(data => this.course = data);
  }
}
