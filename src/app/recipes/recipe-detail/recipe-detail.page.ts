import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtr :AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has("recipeId")){
        //Redirect
        return;
      }

      let paramId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(paramId);
    })
  }

  onDeleteRecipe(){

    let config = {
      header: "Are you sure ?",
      message: "Do you want to delete a recipe ?",
      buttons: [
        { text: "Cancel", role: "cancel" },
        { text: "Delete", handler: () => { this.delete() } }

      ]
    };

    this.alertCtr.create(config).then( (alertEl) => { 
      alertEl.present();
    });

  }

  private delete(){
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
