import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Chapter } from '../../models/course/Chapter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapters',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatExpansionModule, MatCardModule, MatIconModule],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss'
})
export class ChaptersComponent {
  @Input() chapters!: Chapter[];
  constructor() {
  }

}
