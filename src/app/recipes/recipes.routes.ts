import { Route } from "@angular/router";
import { FoodListComponent } from "./food-list/food-list.component";
import { HomeComponent } from "../home/home.component";
import { FormFoodComponent } from "./form-food/form-food.component";

export default [
    {
        path:'',
        component: HomeComponent
    },

    {
        path: 'food-list',
        component: FoodListComponent
    },

    {
        path: 'food-form',
        component: FormFoodComponent
    }

] satisfies Route[];    
