import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  menu: Food[] = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Hawaiiana',
      category: 'food',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },

    {
      id: 2,
      name: 'Coca Cola',
      description: 'Clasica',
      category: 'drink',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 25,
    },

    {
      id: 3,
      name: 'Hamburguesa',
      description: 'Doble con queso',
      category: 'food',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 125,
    },

    {
      id: 4,
      name: 'Fanta',
      description: 'Sabor Naranja',
      category: 'drink',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },

    {
      id: 5,
      name: 'Papas Fritas',
      description: 'Clasicas',
      category: 'drink',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 60,
    },

    {
      id: 6,
      name: 'Pizza',
      description: 'Hawaiiana',
      category: 'food',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },

    {
      id: 7,
      name: 'Pizza',
      description: 'Hawaiiana',
      category: 'food',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },

    {
      id: 8,
      name: 'Pizza',
      description: 'Hawaiiana',
      category: 'food',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },
  ];

  constructor() {}

  getAllFoods(): Food[] {
    return this.menu;
  }

  //Esta función regresa una comida.
  getOne(id: number): Food | undefined {
    return this.menu.find(item=> item.id === id);
  }

  //Esta función agrega una comida.
  addFood(food: Food) {
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
    this.menu.forEach((value, index) => {
      if (value.id == newFood.id) {
        value = newFood;
      }
    });
  }
}
