import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];
  @Output('onRecipeClicked') recipeEmitter = new EventEmitter<Recipe>();

  onRecipeClick(recipeClicked: Recipe) {
    this.recipeEmitter.emit(recipeClicked);
  }
}
