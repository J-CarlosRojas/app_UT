import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  menu: Food[] = [
    {
      id: 1,
      name: 'Pizza Hawaiiana',
      description: 'Pizza hawaiana: sabrosa combinación de piña y jamón.',
      category: 'Comida',
      image:
        'https://mandolina.co/wp-content/uploads/2023/06/pizza-hawaian-2.jpg',
      price: 250,
    },

    {
      id: 2,
      name: 'Coca Cola',
      description: 'Clásica Coca-Cola: refresco icónico y burbujeante.',
      category: 'Bebida',
      image:
        'https://media.justo.mx/products/2_16045_7501055302086_Refresco_Coca_Cola_Original_Botella_de_Vidrio_500ml.jpg',
      price: 25,
    },

    {
      id: 3,
      name: 'Hamburguesa',
      description: 'Hamburguesa con tocino y queso: Sabor irresistible entre capas.',
      category: 'Comida',
      image:
        'https://cdn.forbes.com.mx/2023/05/dia-hamburguesa-e1684977814759-640x360.webp',
      price: 125,
    },

    {
      id: 4,
      name: 'Fanta',
      description: 'Fanta de naranja: Refresco afrutado y refrescante.',
      category: 'Bebida',
      image:
        'https://chedrauimx.vtexassets.com/arquivos/ids/23601757-1600-auto?v=638380920504530000&width=1600&height=auto&aspect=true',
      price: 250,
    },

    {
      id: 5,
      name: 'Papas Fritas',
      description: 'Papas fritas: Crujientes y sabrosas delicias saladas.',
      category: 'Comida',
      image:
        'https://images-gmi-pmc.edge-generalmills.com/476c10e1-c851-4539-8e3b-4b49323927c5.jpg',
      price: 60,
    },

    {
      id: 6,
      name: 'Pizza Pepperoni',
      description: 'Clásica pizza de pepperoni: Sabor intenso y gratificante.',
      category: 'Comida',
      image:
        'https://images.ecestaticos.com/WJT0BFvdZ4poZa5PiFHuCXX2sTo=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F96f%2F563%2Fc84%2F96f563c8404ac8cd97c158887aa56ae1.jpg',
      price: 250,
    },

    {
      id: 7,
      name: 'Helado',
      description: 'Variedad de helados: Diversión en cada sabor, delicioso placer frío.',
      category: 'Comida',
      image:
        'https://images.hola.com/imagenes/cocina/noticiaslibros/20230412229842/helados-sabores-originales-recetas/1-233-402/helados-varios-adob-t.jpg',
      price: 45,
    },

    {
      id: 8,
      name: 'Pastel de Chocolate',
      description: 'Pastel de chocolate: Tentación irresistible, deleite indulgente.',
      category: 'Comida',
      image:
        'https://www.azucardominomex.com/sites/azucardominomex_com/files/styles/m/public/2022-09/600x336_PASTEL-DE-CHOCOLATE-BRUCE.jpg.webp?itok=1xSHaWTo',
      price: 45,
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
