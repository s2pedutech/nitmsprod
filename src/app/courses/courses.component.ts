import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
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
