import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import * as firebase from 'firebase';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

    studentsNew: Array<any> = [];
    studentsOld: Array<any> = [];
    results: Array<any> = [];
    verifyForm: FormGroup = new FormGroup({
    enrollNum: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    });
  constructor() { }

  ngOnInit() {
  }
  
  /*
  copy()
  {
    firebase.database().ref('student').on('value', resp => {
        this.studentsOld = snapshotToArray(resp);
        console.log(this.studentsOld);
        for(var i=0; i < this.studentsOld.length; i++)
        {
            //console.log(this.studentsOld[i]);
            var s:any = {};
            if(this.studentsOld[i].admission != null)
            {
                s.admission = {};
                //s.admission = this.studentsOld[i].admission;
                s.admission.subCourse = this.studentsOld[i].admission.subcourse;
                s.admission.category = this.studentsOld[i].admission.list;
                s.admission.admissionDate = this.studentsOld[i].admission.addate;
                s.admission.enrollNum = this.studentsOld[i].admission.enum;
                s.admission.course = this.studentsOld[i].admission.course;
                s.admission.fees = this.studentsOld[i].admission.fees;
            }
            if(this.studentsOld[i].name)
                s.name = this.studentsOld[i].name;
            if(this.studentsOld[i].mobo != null)
                s.mobno = this.studentsOld[i].mobo;
            if(this.studentsOld[i].key)
                s.key = this.studentsOld[i].key;
            if(this.studentsOld[i].email != null)
                s.email = this.studentsOld[i].email;
            if(this.studentsOld[i].amobno != null)
                s.amobno = this.studentsOld[i].amobno;
            if(this.studentsOld[i].gender != null)
                s.gender = this.studentsOld[i].gender;
            if(this.studentsOld[i].description != null)
                s.description = this.studentsOld[i].description;
            if(this.studentsOld[i].dob != null)
                s.dob = this.studentsOld[i].dob;
            if(this.studentsOld[i].status != null)
                s.status = this.studentsOld[i].status;
            if(this.studentsOld[i].uname != null)
                s.uname = this.studentsOld[i].uname;
            if(this.studentsOld[i].uid != null)
                s.uid = this.studentsOld[i].uid;
            //console.log(s);
            this.studentsNew[s.uid] = s;
        }
        
        console.log(this.studentsNew);
        firebase.database().ref('student1/').set(this.studentsNew);
    });
  }
  */
  verify()
  {
    console.log(this.verifyForm.value);
    
    var e = this.verifyForm.controls.enrollNum.value;
    var d = this.verifyForm.controls.dob.value;
    
    var ref = firebase.database().ref('student1');
   
    ref.once('value', resp => {
        var students = snapshotToArray(resp);
        console.log(students);
        
        students.filter(x => {
            
            if(x.admission && x.admission.enrollNum === e && x.dob === d)
                this.results = x.results;
        });
    });
  }
}

const snapshotToArray = snapshot => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

