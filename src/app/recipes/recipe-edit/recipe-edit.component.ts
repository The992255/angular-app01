import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route, Params, Router } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  pramsSubscription: Subscription;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.pramsSubscription = this.route.params.subscribe(
      (pramas: Params) => {
        this.id = pramas['id'];
        this.editMode = pramas['id'] != null;
        //if(id!=null) return true;反之則反
        this.initForm();
      }
    );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
    if (this.editMode) {
      this.recipeService.updataRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.btnCancle();
  }

  btnCancle() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern('[1-9]+[0-9]*$')
        ])
      })
    )
  }

  dellIngredient(indexl: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(indexl);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  ngOnDestroy() {
    console.log('do');
    
    this.pramsSubscription.unsubscribe();
  }

}
