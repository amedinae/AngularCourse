import { Component } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Mote de queso', 'Sopa costeña con ñame y queso', 'https://cdn0.recetasgratis.net/es/posts/0/1/8/mote_de_queso_56810_orig.jpg'),
    new Recipe('Mote de queso', 'Sopa costeña con ñame y queso', 'https://cdn0.recetasgratis.net/es/posts/0/1/8/mote_de_queso_56810_orig.jpg')
  ];
}
