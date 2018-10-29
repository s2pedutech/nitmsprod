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
{"name":"Management", "img":"assets/img/management.jpg", "subCourses":[
    {"name" : "Executive Management Programs","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/Executive Management Programs.pdf"},
  {"name" : "Management Programs","img":"assets/img/cs.jpg" ,"syllabus" :"assets/docs/Management Programs.pdf"},
  {"name" : "Professional Management Programs","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/Professional Management Programs.pdf"}
]},
{"name":"Engineering", "img":"assets/img/engg.jpg", "subCourses" :[
  {"name" : "Chemical Engineering","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/Chemical Engineering.pdf"},
  {"name" : "Computer Science","img":"assets/img/cs.jpg" ,"syllabus" :"assets/docs/Computer Science Engineering.pdf"},
  {"name" : "Information Technology","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/IT.pdf"},
  {
    "name" : "Automobile Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Automobile Engineering.pdf"
  },
  {
    "name" : "Electrical and Electronics Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Electrical & Electronics Engineering.pdf"
  },
  {
    "name" : "Electrical Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Electrical Engineering.pdf"
  },
  {
    "name" : "Civil Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Civil Engineering.pdf"
  },
  {
    "name" : "Electronics and Telecommunication Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Electronics & Telecommunication Engineering.pdf"
  },
  {
    "name" : "Instrumentation and Control Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Instrumentation & Control Engineering.pdf"
  },
  {
    "name" : "Mechanical Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Mechanical Engineering.pdf"
  },
  {
    "name" : "Polymer Science Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Polymer Science Engineering.pdf"
  },
]},
{"name":"Diploma/Specialization", "img":"assets/img/diploma.jpg", "subCourses" :[
  {"name" : "One Year Diploma Program","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/One Year Diploma Program.pdf"},
  {"name" : "Six Month Diploma Courses","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/Six Month Diploma Courses.pdf"},
  {"name" : "Specialization Courses","img":"assets/img/ch.jpg" , "syllabus" :"assets/docs/Specialization List.pdf"}]},
{"name":"Computer Application", "img":"assets/img/ca.jpg", "subCourses": [
{ "img":"assets/img/bca.jpg", "name":"","syllabus": "assets/docs/Computer Application.pdf"},
{ "name":"","img":"assets/img/mca.png", "syllabus": "assets/docs/Computer Application.pdf"},
]},
{"name":"Textile Engineering", "img":"assets/img/textileengg.jpg", "subCourses": [{
    "name" : "Textile Engineering","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Textile Engineering.pdf"
  }]},
{"name":"Textile Management", "img":"assets/img/textilemgmt.jpg", "subCourses": [{
    "name" : "Textile Management","img":"assets/img/it.jpg" ,"syllabus" :"assets/docs/Textile Management.pdf"
  }]},
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
