import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Food } from '../shared/food.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CurrencyPipe, TitleCasePipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food:Food | undefined;
}


 
