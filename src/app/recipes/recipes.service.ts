import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://tiny.cc/yz3s3y',
      ingredients: ['Fries', 'Sausage', 'Pasta']
    },
    {
      id: 'r2',
      title: 'Tiramisu',
      imageUrl: 'http://tiny.cc/n23s3y',
      ingredients: ['Inno', 'Coffee', 'Sugar']
    }
  ];

  constructor() { }

  getAllRecipes() {
    // arrays in js are ref types, not primitives;
    // spread operator creates a copy of the array by pulling all elements
    // and stuffing them inside a new array (perfect copy)
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
