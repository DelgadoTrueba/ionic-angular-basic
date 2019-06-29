import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: "r1",
      tittle: "Salad",
      imageUrl: "/assets/img/salad.jpg",
      ingredients: ["Tomato", "Onion"]
    },
    {
      id: "r2",
      tittle: "rice with milk",
      imageUrl: "/assets/img/salad.jpg",
      ingredients: ["rice", "milk", "Salad"]
    }
  ]

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [... this.recipes];
  }

  getRecipe(recipeId: string){
    let finded_recipe = this.recipes.find( recipe => {
      return recipe.id === recipeId;
    })

    return { ... finded_recipe }
  }

}
