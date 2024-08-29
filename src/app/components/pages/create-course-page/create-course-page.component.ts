import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-create-course-page',
  standalone: true,
  imports: [HeaderComponent, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './create-course-page.component.html',
  styleUrl: './create-course-page.component.scss'
})
export class CreateCoursePageComponent {

}
