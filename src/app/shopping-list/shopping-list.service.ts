import {Ingredient} from '../shared/ingredient.model.component';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  getIngredient() {
    return this.ingredients;
  }
}
