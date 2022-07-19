import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.mode";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    constructor(private slService: ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Dal Makhni','I dont Know', 'https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900',[new Ingredient("Milk",1)]),
        new Recipe('Dal Makhni','I dont Know', 'https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900',[new Ingredient('Paneer', 1)])
    ]

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}