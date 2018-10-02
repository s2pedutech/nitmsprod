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

subcourses: Array<any> = [];
currentSection = "courseSection";
courses: Array<any>=[
{"name":"Management", "img":"assets/img/management.jpg", "subCourse":{"name":"Management Programs", "categories":[
{
    
}
]}},
{"name":"Engineering", "img":"assets/img/engg.jpg", "subCourses" :[
  {"name" : "Chemical Engineering","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/chemical.pdf"},
  {"name" : "Computer Science","img":"assets/img/cs.jpg" ,"syllabus" :"assets/docs/Computer Science.pdf"},
  {"name" : "Information Technology","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/IT.pdf"}
]},
{"name":"Diploma/Specialization", "img":"assets/img/diploma.jpg"},
{"name":"Computer Application", "img":"assets/img/ca.jpg", "subCourses": [
{ "img":"assets/img/bca.jpg", "name":"","syllabus": "assets/docs/BCA.pdf"},
{ "name":"","img":"assets/img/mca.png", "syllabus": ""},
]},
{"name":"Textile Engineering", "img":"assets/img/textileengg.jpg"},
{"name":"Textile Management", "img":"assets/img/textilemgmt.jpg"},
];
  constructor() {
  this.currentSection = "courseSection";
   }

  ngOnInit() {
    this.currentSection = "courseSection";
  }

showCourses() 
{
  this.currentSection = "courseSection";          
}
showSubCourses(sub)
{
  this.subcourses = sub.subCourses;
  console.log(sub);
  this.currentSection = "subSection";
}
}
