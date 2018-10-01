import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(3000 )
      ])
    ])
  ]
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