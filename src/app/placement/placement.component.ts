import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
placements: Array<any>;
  constructor() { 
    firebase.database().ref('company/').once('value', resp => {
        console.log(resp.val());
        this.placements = snapshotToArray(resp);
    });
  }

  ngOnInit() {
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