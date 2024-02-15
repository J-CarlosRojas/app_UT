import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, MatButtonModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent {

  foodForm = new FormGroup({
    itemName: new FormControl('', Validators.required), 
    itemCategory: new FormControl('', Validators.required), 
    itemDescription: new FormControl('', Validators.minLength(20)), 
    itemPrice: new FormControl('', [Validators.required, positiveNumberValidator()]) 
  });



}

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value !== null && value <= 0) {
      return { 'positiveNumber': true };
    }
    return null;
  };
}