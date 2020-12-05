import {Component, ViewChild} from '@angular/core';
import {Comp2Component} from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2 Kazlanzhy';
  string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  isLoggedIn = false;
  currentDate = new Date();
  value = 150000000;
  @ViewChild(Comp2Component, {static: false}) countComp: Comp2Component;

  login(): void {
    this.isLoggedIn = true;
  }

  increment(): void {
    this.countComp.increment();
  }

  decrement(): void {
    this.countComp.decrement();
  }
}
