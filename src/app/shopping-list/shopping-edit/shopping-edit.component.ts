import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ingredients = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }

  onDelete(name: HTMLInputElement, amount: HTMLInputElement) {

  }
}
