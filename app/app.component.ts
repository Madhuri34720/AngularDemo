import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="header">
            <ul class="nav">
            <li><a  [routerLink]="['/welcome']">Home</a> </li>
            <li><a  [routerLink]="['/products']">Product List</a> </li>
            </ul>
            </div>
            <div class="container">
            <router-outlet></router-outlet>
            </div>`
            ,
})
export class AppComponent  { name = 'Angular'; }
