import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrediants.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  public ingrediantAdded = new EventEmitter<Ingredient>();
  public ingrediantDeleted = new EventEmitter<string>();
  public isDelNameEmpty: string = "";
  public isDelClick: boolean = false;
  public ingredients: Ingredient[]=[
    new Ingredient('Orange', 12),
    new Ingredient('Apple', 10)
  ];
  
  constructor() { }

  getIngrediant(){
    return this.ingredients.slice();
  }

  ingAdded(ingrediant: Ingredient){
    this.ingredients.push(ingrediant);
  }

  ingDeleted(name: string){
    let ingredientLength = this.ingredients.length;

    this.isDelNameEmpty = name;
    this.isDelClick = true;

    for(let i = 0; i< ingredientLength; i++){
      if(this.ingredients[i].name.toLocaleLowerCase() == name.toLocaleLowerCase())
        this.ingredients.splice(i,1);
    }
  }
}
