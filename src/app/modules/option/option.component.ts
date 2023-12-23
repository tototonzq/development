import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ROOT_MENU } from './option.data';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent {
  constructor() {}
  private router = inject(Router)

  navigateTo(router: string) {
    this.router.navigate([router]);
  }

  menu = ROOT_MENU;
}
