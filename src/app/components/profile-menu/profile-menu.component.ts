import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {
  isDropdownOpen: boolean = false;
  @Input() userName?: string | null;
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
