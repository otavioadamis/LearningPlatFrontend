import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user/User';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, ProfileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuValue:boolean = false;
  menuIcon:string = 'menu'

  constructor(private userService: UserService) {

  }

  getUserDetails(): User | null {
    return this.userService.getCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.userService.isLogged();
  }

  openMenu(){
    this.menuValue =! this.menuValue;
    this.menuIcon = this.menuValue ? 'arrow_forward_ios':'menu'
  }

  closeMenu(){
    this.menuValue = false;
    this.menuIcon = 'menu'
  }
}
