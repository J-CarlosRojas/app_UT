import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Food } from '../../../recipes/shared/food.model';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.scss'
})
export class DialogConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public food: Food){

  }
}
