import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user/User';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, ProfileMenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {
  menuValue:boolean = false;
  menuIcon:string = 'menu';
  userName: string = '';


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getLoggedInUser();
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

  getLoggedInUser(): void | null {
    this.userService.getUserByAuthToken()?.subscribe(data => this.userName = data.name);
  }
}
