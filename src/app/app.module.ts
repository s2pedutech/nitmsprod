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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
