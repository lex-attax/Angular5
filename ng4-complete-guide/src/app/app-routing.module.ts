import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes [
    { path: 'recipes', component: RecipesComponent }
    ]


// Transform from a normal TypeScript class to a Module
@NgModule({
    
})
export class AppRoutingModule {
    
}