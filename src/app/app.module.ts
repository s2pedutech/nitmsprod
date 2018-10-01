import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { VerificationComponent } from './verification/verification.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccrediationComponent } from './accrediation/accrediation.component';
import { CertificationComponent } from './certification/certification.component';
import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';
import { PlacementComponent } from './placement/placement.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
// import { IonicPageModule } from 'ionic-angular';
// import { IntroPage } from './intro';
// import {FileUploadModule } from 'ng2-file-upload';
// import { Ng2CloudinaryModule } from 'ng2-cloudinary';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'stuLogin', component: StudentComponent
    },  
    {
        path: 'stuVerify', component: VerificationComponent
    }
    ];
    
    var config = {
    apiKey: "AIzaSyDKg-DrORLEw5cYqk81T5FhyYn0KHjjtMA",
    authDomain: "nitms-84ab3.firebaseapp.com",
    databaseURL: "https://nitms-84ab3.firebaseio.com",
    projectId: "nitms-84ab3",
    storageBucket: "nitms-84ab3.appspot.com",
    messagingSenderId: "276244191720"
  };
  firebase.initializeApp(config);
    
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    VerificationComponent,
    HomeComponent,
    DetailsComponent,
    NavbarComponent,
    AboutusComponent,
    AccrediationComponent,
    CertificationComponent,
    CoursesComponent,
    ExamsComponent,
    PlacementComponent,
    DownloadsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SliderModule,
    // IonicPageModule.forChild(IntroPage),
      // FileUploadModule,
       // Ng2CloudinaryModule    => seems necessary for cl-image
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
