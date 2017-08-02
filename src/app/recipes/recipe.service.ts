import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
