import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user/User';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {
  @Input() user: User | undefined;

  constructor(private userService: UserService, private router:Router) {}

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('');
  }
}
