import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recope.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() repice = new EventEmitter<{name: string, description: string, imagePath: string}>();
  recipes: Recipe[] = [
    new Recipe('粗奶丸', '丸!!!!', 
    'https://archive-media-0.nyafuu.org/bant/image/1513/71/1513711499530.png'),
    new Recipe('打架異己烷', '異己......烷!!!!!', 
    'https://archive-media-1.nyafuu.org/bant/image/1514/13/1514130091969.png')
  ];

  constructor() { 
    console.log(this.recipes[0])
  }

  ngOnInit() {
  }

  onDetail(repice) {
    this.repice.emit(repice);
  }
}
