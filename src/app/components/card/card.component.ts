import { Component, Input } from '@angular/core';
import { Course } from '../../models/course/Course';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() course!: Course;
}
