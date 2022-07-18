import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Dal Makhni','I dont Know', 'https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900'),
    new Recipe('Dal Makhni','I dont Know', 'https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900'),
    new Recipe('Dal Makhni','I dont Know', 'https://static.toiimg.com/thumb/53097626.cms?width=1200&height=900')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
