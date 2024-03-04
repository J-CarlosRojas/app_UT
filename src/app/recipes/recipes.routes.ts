import { Route } from "@angular/router";
import { FoodListComponent } from "./food-list/food-list.component";
import { HomeComponent } from "../home/home.component";
import { FormFoodComponent } from "./form-food/form-food.component";
import { DetailsFoodComponent } from "./details-food/details-food.component";
import { Component } from "@angular/core";


export default [
    {
        path:'',
        component: HomeComponent,
        title:'Home'
    },

    {
        path: 'food-list',
        component: FoodListComponent,
        title: 'Lista de Comida'
    },

    {
        path: 'food-form',
        component: FormFoodComponent,
        title: 'Agregar comidas'
    },

    {
        path: 'details-food/:id',
        component: DetailsFoodComponent,
        title: 'Detalles de Comida'
    },

    {
        path: 'food-form/:id',
        component: FormFoodComponent,
        title: 'Actualizar Comida'
    }


   

] satisfies Route[];    
