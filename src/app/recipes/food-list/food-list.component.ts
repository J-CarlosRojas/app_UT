import { Component, OnInit } from '@angular/core';
import { FoodService } from '../shared/food.service';
import { FoodComponent } from '../food/food.component';
import { Food } from '../shared/food.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  data: Food[] = [];
  constructor(public serviceFood: FoodService) {}

  ngOnInit(): void {
    //this.data = this.serviceFood.getAllFoods();
    this.getAllFoods();
    console.log(this.data);
  }

  //Funcion para obtener todas las comidas
  getAllFoods() {
    this.serviceFood.getAll().subscribe({
      next: (data) => (this.data = data),
      error: (e) => console.error(e),
      complete: () => console.info('Complete'),
    });
  }

  //Funcion para borrar comidas
  public foodDeleted(deleted:boolean):void{
    if(deleted){
      this.getAllFoods();
    }
  }
}
