import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    currentSection:string = "login";
    loginForm: FormGroup = new FormGroup({
    uname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    }); 
  constructor() { }

  ngOnInit() {
  }
  
  login()
  {
    console.log(this.loginForm.value);
    // signin to firebase using the email and pwd
    var name = this.loginForm.controls.uname.value + "@gmail.com";
    var pwd = this.loginForm.controls.password.value;
    //firebase.auth().signInWithEmailAndPassword(name,pwd)
    firebase.auth().signInWithEmailAndPassword(name,pwd).then( (success) => {
    console.log(success);
    this.currentSection = "student";
    firebase.auth().onAuthStateChanged((user) => {
        if(user)
            console.log(user.uid);
    });
    
    }, 
    (fail) => {
        console.log(fail);
        alert("Unable to login. Please check username and password");
    }).catch(function(error) {
    console.log(error);
    });
  }

    logout()
    {
        firebase.auth().signOut().then((success) => {
        console.log("Signout successful");
        });
        this.loginForm.reset();
        this.currentSection = "login";
    }
}
