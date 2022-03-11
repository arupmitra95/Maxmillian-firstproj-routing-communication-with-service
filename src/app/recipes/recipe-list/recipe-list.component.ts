import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
 
  constructor(private RcpSrv: RecipeService,
    private route: Router,
    private router: ActivatedRoute) {
    this.recipes = this.RcpSrv.getData();   
  }

  ngOnInit(): void {
  }

  onNewRecipe(){
    this.route.navigate(['new'], {relativeTo: this.router});
  }

}
