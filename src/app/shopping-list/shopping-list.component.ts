import {Component, OnInit, Input} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model.component';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  this.ingredients = this.shoppingListService.getIngredient();
  }

}
