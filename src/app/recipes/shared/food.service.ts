import { Injectable } from '@angular/core';
import { Food } from './food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu:Food[] = [

    {
      id: 1,
      name: 'Pizza',
      description: 'Hawaiiana',
      category:'food',
      image: 'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price:250
      
    }

  ]

  constructor() { }
}
