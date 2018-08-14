import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  repiceToUp;

  constructor() { }

  ngOnInit() {
  }

  getRepice(repice) {
    this.repiceToUp=repice;
  }

}
