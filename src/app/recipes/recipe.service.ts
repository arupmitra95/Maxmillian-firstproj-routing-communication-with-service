import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingrediants.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Butter Chicken', 
      'This is the Recipe',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg',
      [
        new Ingredient('Meat',5),
        new Ingredient('Butter',5)
      ]
    ),
    new Recipe(
      'Test Recipe1', 
      'This is a test Recipe1',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg',
      [
        new Ingredient('Buns',5),
        new Ingredient('Meat',5)
      ]
    )
  ];

  getData(){
    return this.recipes;
  }

  getRecipeID(index: number){
    return this.recipes[index];
  }

  constructor() { }
}
