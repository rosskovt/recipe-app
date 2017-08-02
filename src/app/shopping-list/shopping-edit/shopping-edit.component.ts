import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model.component';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  ingredients = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onDelete(name: HTMLInputElement, amount: HTMLInputElement) {

  }
}
