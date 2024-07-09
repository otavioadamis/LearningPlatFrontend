import { Component, Input } from '@angular/core';
import { Course } from '../../models/course/Course';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() course!: Course;
}
