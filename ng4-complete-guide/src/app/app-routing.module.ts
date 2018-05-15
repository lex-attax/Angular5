import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },    
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '' }
        ] },
    { path: 'shopping-list', component: ShoppingListComponent },
];


// Transform from a normal TypeScript class to a Module
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}