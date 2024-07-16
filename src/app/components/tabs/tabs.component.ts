import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit {

@Input() tabsArray: string[] = [];
@Output() onTabChange = new EventEmitter<number>();
activatedTab: number = 0;

constructor() {

}
ngOnInit(): void {}

setTab(index: number): void {
  this.activatedTab = index;
  this.onTabChange.emit(this.activatedTab);
}

}
