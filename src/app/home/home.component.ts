import { Component, OnInit } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AccrediationComponent } from '../accrediation/accrediation.component';
import { CertificationComponent } from '../certification/certification.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { CoursesComponent } from '../courses/courses.component';
import { DownloadsComponent } from '../downloads/downloads.component';
import { ExamsComponent } from '../exams/exams.component';
import { PlacementComponent } from '../placement/placement.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currentSection: string = "home";
  constructor() {
  
  }

  ngOnInit() {
  this.currentSection = "home";
  }
  
  selectSection(section)
  {
    this.currentSection = section;
  }

  studentVerify()
  {
    
  }
  
  studentLogin()
  {
    
  }
}
