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
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation2', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(9000 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    ]
})
export class CoursesComponent implements OnInit {

courses: Array<any>=[
{"name":"Management", "img":"assets/img/engg.jpg", "subCourse":{"name":"Management Programs", "categories":[
{
    
}
]}},
{"name":"Engineering", "img":"assets/img/management.jpg"},
{"name":"Diploma/Specialization", "img":"assets/img/diploma.jpg"},
{"name":"Computer Application", "img":"assets/img/ca.jpg"},
{"name":"Textile Engineering", "img":"assets/img/textileengg.jpg"},
{"name":"Textile Management", "img":"assets/img/textilemgmt.jpg"},
];
  constructor() { }

  ngOnInit() {
  }

}
