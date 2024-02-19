import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [ ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, MatButtonModule],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent {

  foodForm = this.formBuilder.group({
    itemImage: ['',],
    itemName: ['', Validators.required], 
    itemCategory: ['', Validators.required], 
    itemDescription: ['', [Validators.required, Validators.minLength(20)]], 
    itemPrice: ['', [Validators.required, Validators.min(0.01)]]
  });

  constructor(private formBuilder:FormBuilder){

  }

  get itemImage(){
    return this.foodForm.get('itemImage');
  }

  get itemName(){
    return this.foodForm.get('itemName');
  }

  get itemCategory(){
    return this.foodForm.get('itemCategory');
  }
  
  get itemDescription(){
    return this.foodForm.get('itemDescription');
  }

  get itemPrice(){
    return this.foodForm.get('itemPrice');
  }

}


