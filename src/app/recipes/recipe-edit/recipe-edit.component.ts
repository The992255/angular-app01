import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  pramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pramsSubscription =  this.route.params.subscribe(
      (pramas: Params) => {
        this.id = pramas['id'];
        this.editMode = pramas['id'] != null;
        //if(id!=null) return true;反之則反        
      }
    );
  }

  ngOnDestroy() {
    this.pramsSubscription.unsubscribe();
  }

}
