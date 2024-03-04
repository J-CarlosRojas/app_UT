import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Food } from '../shared/food.model';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FoodService } from '../shared/food.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../shared/components/dialog-confirm/dialog-confirm.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CurrencyPipe,
    TitleCasePipe,
    RouterModule,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  @Input() food: Food | undefined;

  constructor(public serviceFood: FoodService, public dialog: MatDialog) {}

  deleteFood(deleteFood: Food) {}

  openDialog(deleteFood: Food) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: deleteFood,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.serviceFood.deleteFood(deleteFood);
      }
    });
  }
}
