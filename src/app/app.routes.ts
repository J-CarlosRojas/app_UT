import { Routes } from '@angular/router';
import { FoodListComponent } from './recipes/food-list/food-list.component';


export const routes: Routes = [

    {path: 'food', loadChildren: ()=>import('./recipes/recipes.routes')}

];
