import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    
    display='none';
    displayImage="";
    currentStudent:any = {};
    currentSection:string = "login";
    loginForm: FormGroup = new FormGroup({
    uname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    }); 
  constructor() { }

  ngOnInit() {
  }
  
  viewImage(img)
    {
        this.display='block';
        this.displayImage = img;
    }
    
    closeModal()
    {
        this.display = 'none';
    }
  
  login()
  {
    console.log(this.loginForm.value);
    // signin to firebase using the email and pwd
    var name = this.loginForm.controls.uname.value + "@gmail.com";
    var pwd = this.loginForm.controls.password.value;
    //firebase.auth().signInWithEmailAndPassword(name,pwd)
    firebase.auth().signInWithEmailAndPassword(name,pwd).then( (success) => {
    var key = success.user.uid;
    var refstr = "student1/" + key;
    console.log(refstr);
    this.currentSection = "student";
    firebase.database().ref(refstr).on('value',resp => {
        console.log(resp.val());
        this.currentStudent = resp.val();
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
