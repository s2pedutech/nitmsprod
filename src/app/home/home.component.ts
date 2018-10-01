import { Component, OnInit } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AccrediationComponent } from '../accrediation/accrediation.component';
import { CertificationComponent } from '../certification/certification.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { CoursesComponent } from '../courses/courses.component';
import { DownloadsComponent } from '../downloads/downloads.component';
import { ExamsComponent } from '../exams/exams.component';
import { PlacementComponent } from '../placement/placement.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(3000 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation1', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(6000 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation2', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(8000)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class HomeComponent implements OnInit {
    currentSection: string = "home";
    collapsed = true;

    // public sliders=any[];
    // items: Array<any> = ["abcd","defg","ghij","klmn"];
  constructor() {
    // this.sliders.push({
    //   imagePath:'assets/img/img6.jpg',
    //   label:'First slide label'
    // },
    // imagePath:'assets/img/img2.jpg',
    //   label:'second slide label'
    // }
    // });
  
  }

  ngOnInit() {
  this.currentSection = "home";

// this.imagesUrl = [
//     'assets/img/nitmslogo.png'
//     'assets/img/img2.jpg',
//     'assets/img/img3.jpg',
//     'assetes/img/img1.jpg'
//     ];0

  }
  toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  selectSection(section)
  {
    this.currentSection = section;
    this.toggleCollapsed();
  }

  studentVerify()
  {
    
  }
  
  studentLogin()
  {
    
  }
}
