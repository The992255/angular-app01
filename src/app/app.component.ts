import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCodMQ7mH_Ax-fo5XPg-5WHA1Gh8yLo5zE",
      authDomain: "angular-learn-d3dbe.firebaseapp.com"
    });
  }
}
