import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {
  @Input() userName?: string | null;

  constructor(private userService: UserService, private router:Router) {}

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('');
  }
}
