import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details-food',
  standalone: true,
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './details-food.component.html',
  styleUrl: './details-food.component.scss',
})
export class DetailsFoodComponent implements OnInit {
  constructor(public foodService: FoodService) {}

  route: ActivatedRoute = inject(ActivatedRoute);

  foodId: number = -1;
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0,
  };

  ngOnInit(): void {
    this.foodId = Number(this.route.snapshot.params['id']);

    this.foodService.getOneFood(this.foodId).subscribe({
      next: (value) => (this.food = value),
      error: (e) => console.error('error'),
      complete: () => console.info('Complete'),
    })

    //this.food = this.foodService.getOne(this.foodId);
  }
}
