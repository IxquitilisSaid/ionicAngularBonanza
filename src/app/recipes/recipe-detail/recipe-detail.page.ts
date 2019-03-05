import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  // Activated Route is built-in from angular router
  // contains info about the loaded component
  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {

      // check if observable contains 'recipeId' param
      // if not then return the page (still needs the logic)
      if (!paramMap.has('recipeId')) {
        return;
      }

      // recipeId (var) is a scoped. Doesn't need `this`
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe =  this.recipesService.getRecipe(recipeId);
    });
  }

}
