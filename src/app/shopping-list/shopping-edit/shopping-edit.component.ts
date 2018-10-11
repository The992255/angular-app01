import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as formApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slform: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private store: Store<formApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngrdientIndex > -1) {
          this.editItem = data.editedIngrdient;
          this.slform.setValue({
            name: this.editItem.name,
            amout: this.editItem.amount
          });
          this.editMode = true;
        } else {
          this.editMode = false;
        }
      }
    );
    // this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
    //   this.editMode = true;
    //   this.editItemIndex = index;
    //   this.editItem = this.shoppingListService.getIngredient(index);
    //   this.slform.setValue({
    //     name: this.editItem.name,
    //     amout: this.editItem.amount
    //   })
    // });
  }

  addPlay(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amout);
    if (this.editMode) {
      // this.shoppingListService.updataIngredients(this.editItemIndex, ingredient);
      this.store.dispatch(new ShoppingListActions.UpdataIngredient(ingredient));
      this.editMode = false;
    } else {
      // this.shoppingListService.addIngredients(ingredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    form.reset();
  }

  delete(form: NgForm) {
    this.editMode = false;
    // this.shoppingListService.deleteIngredients(this.editItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    form.reset();
  }

  clean(form: NgForm) {
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
