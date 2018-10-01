import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-accrediation',
  templateUrl: './accrediation.component.html',
  styleUrls: ['./accrediation.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(3000 )
      ])
      ])
  ]
})
export class AccrediationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
