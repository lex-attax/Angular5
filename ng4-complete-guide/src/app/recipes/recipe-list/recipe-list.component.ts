import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6251a0ab3853414a3169bfd5e79f164&auto=format&fit=crop&w=634&q=80')
    ];


  constructor() { }

  ngOnInit() {
  }

}
