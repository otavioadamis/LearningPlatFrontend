import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuValue:boolean = false;
  menuIcon:string = 'menu'

  openMenu(){
    this.menuValue =! this.menuValue;
    this.menuIcon = this.menuValue ? 'arrow_forward_ios':'menu'
  }

  closeMenu(){
    this.menuValue = false;
    this.menuIcon = 'menu'
  }
}
