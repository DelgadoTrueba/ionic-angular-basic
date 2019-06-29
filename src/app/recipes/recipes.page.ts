import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: "r1",
      tittle: "chele",
      imageUrl: "/assets/img/salad.jpg",
      ingredients: ["French Fries", "Pork meat", "Salad"]
    },
    {
      id: "r2",
      tittle: "chele2",
      imageUrl: "/assets/img/salad.jpg",
      ingredients: ["French Fries", "Pork meat", "Salad"]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
