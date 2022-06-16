import { Component, OnInit } from '@angular/core';
import { AppLibService } from './app-lib.service';
@Component({
  selector: 'lib-app-lib',
  template: `
  <h1>{{title}}</h1>
  <p *ngIf="user">
    <i>Welcome, {{user}}</i>
  <p>
  `,
  styles: [
  ]
})
export class AppLibComponent implements OnInit {
  title = 'NgModules';
  user = '';

  constructor(userService: AppLibService) {
    this.user = userService.userName;
  }

  ngOnInit(): void {
  }

}
