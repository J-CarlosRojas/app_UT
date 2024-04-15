import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  API_URL: string = '';

  constructor(private http: HttpClient) {
    this.API_URL = `${environment.API_URL}`;
  }

  //Obterner todas las comidas
  public getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(this.API_URL + 'food/');
  }
  //Agregar comidas
  public addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.API_URL + 'food/save', food);
  }
  //Obtener una comida
  public getOneFood(id: number): Observable<Food> {
    return this.http.get<Food>(this.API_URL + 'food/find/' + id);
  }
  //Borrar una comida
  public deleteFood(deleteFood: Food): Observable<unknown> {
    return this.http.delete(this.API_URL + 'food/delete/' + deleteFood.id);
  }

  /*
  getAllFoods(): Food[] {
    return this.menu;
  }

  //Esta función regresa una comida.
  getOne(id: number): Food | undefined {
    return this.menu.find((item) => item.id === id);
  }

  //Esta función agrega una comida.
  /*addFood(food: Food) {
    this.menu.push(food);
  }

  //Esta función borra una comida.
 public deleteFood(deleteFood: Food) {
    this.menu.forEach((value, index) => {
      if (value.id == deleteFood.id) {
        this.menu.splice(index, 1);
      }
    });
  }

  public updateData(newFood: Food) {
    this.menu.forEach((item, index) => {
      if (item.id == newFood.id) {
        this.menu[index] = newFood;
      }
    });
  }*/
}
