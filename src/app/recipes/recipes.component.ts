import { Component } from '@angular/core';

import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = [
    new Recipe('Mote de queso', 'Sopa costeña con ñame y queso', 'https://cdn0.recetasgratis.net/es/posts/0/1/8/mote_de_queso_56810_orig.jpg'),
    new Recipe('Bandeja paisa', 'Plata con arroz, frijoles, carne molida, chicharron, aguacate, etc.', 'https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616-1.webp')
  ];
  selectedRecipe: Recipe;

  showRecipeDetails(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
