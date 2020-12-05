import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  count = 0;
  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }


  constructor() { }

  ngOnInit(): void {
    this.count = 20;
    console.log('count = ', this.count);
  }

}
