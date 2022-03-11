import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediants.model';
import { ShoppingService } from './shopping.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[];
  isDelNameEmpty:string = "";
  isDelClick:boolean = false;

  constructor(private shpsrvc: ShoppingService) {
    this.onIncredianAdded();
    this.onIncredianDeleted();
  }

  ngOnInit(): void {
  }

  onIncredianAdded(){
    this.ingredients = this.shpsrvc.getIngrediant();
    this.shpsrvc.ingrediantAdded.subscribe((ingredient: Ingredient)=>{
      this.shpsrvc.ingAdded(ingredient);
      this.ingredients = this.shpsrvc.getIngrediant();
    } );
  }

  onIncredianDeleted(){
    this.shpsrvc.ingrediantDeleted.subscribe((name: string)=>{
      this.shpsrvc.ingDeleted(name);
      this.ingredients = this.shpsrvc.getIngrediant();
    });
  }
  // onIngrediantAdded(event: Ingredient){
  //   this.shpsrvc.ingAdded(event);
  // }
  // ingrediantDeleted(name: string){
  //   let ingredientLength = this.ingredients.length;
  //   this.isDelNameEmpty = name;
  //   this.isDelClick = true;
  //   for(let i = 0; i< ingredientLength; i++)
  //   {
  //     if(this.ingredients[i].name.toLocaleLowerCase() == name.toLocaleLowerCase())
  //       this.ingredients.splice(i,1);
  //   }
  // }

}
