import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
//  @Input() recipe!:Recipe;
  recipe!:Recipe;
  id!: number;
  constructor(private shpsrvc: ShoppingService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.params['id']; first time when we want to load a recipe
    this.route.params.subscribe((params: Params)=>{
      this.id = parseInt(params['id']);
      this.recipe = this.recipeService.getRecipeID(this.id);
    });
  }
  onAddToShoppingList(){
    for(let i= 0; i< this.recipe.ingrediants.length;i++){
      this.shpsrvc.ingAdded(this.recipe.ingrediants[i]);
    }
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
