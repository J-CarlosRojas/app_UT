import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
    MatIcon,
    RouterModule,
  ],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss',
})
export class FormFoodComponent implements OnInit {
  foodForm = this.formBuilder.group({
    itemImage: ['', Validators.required],
    itemName: ['', Validators.required],
    itemCategory: ['', Validators.required],
    itemDescription: ['', [Validators.required, Validators.minLength(20)]],
    itemPrice: ['', [Validators.required, Validators.min(0.01)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    public servicioComida: FoodService,
    public router: Router
  ) {}

  foodId: number = -1;
  edit: boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    price: 0,
  };

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.edit = true;
      this.foodId = Number(this.route.snapshot.params['id']);

      this.servicioComida.getOneFood(this.foodId).subscribe({
        next: (value) => this.updateForm(value),
        error: (e) => console.error('error servicio'),
        complete: () => console.info('Complete'),
      });

      //this.food = this.servicioComida.getOne(this.foodId);
    }
  }

  public updateForm(food: Food): void {
    if (food) {
      this.foodForm.patchValue({
        itemImage: food.image,
        itemName: food.name,
        itemCategory: food.category,
        itemDescription: food.description,
        itemPrice: food.price.toString(),
      });
    }
  }

  public updateData() {
    if (this.foodForm.status == 'VALID') {
      if (
        this.itemName?.value &&
        this.itemDescription?.value &&
        this.itemCategory?.value &&
        this.itemPrice?.value &&
        this.itemImage?.value
      ) {
        let price = parseInt(this.itemPrice?.value);
        let comida: Food = {
          id: this.foodId,
          image: this.itemImage?.value,
          name: this.itemName?.value,
          description: this.itemDescription?.value,
          category: this.itemCategory?.value,
          price: price,
        };
        //pasando comida al servicio.
        this.servicioComida.addFood(comida).subscribe({
          next: (value) => this.updateForm(value),
          error: (e) => console.error('error'),
          complete: () => this.router.navigate(['/food/food-list']),
        });
        
      }
    }
  }

  public sendData() {
    if (this.foodForm.status == 'VALID') {
      if (
        this.itemName?.value &&
        this.itemDescription?.value &&
        this.itemCategory?.value &&
        this.itemPrice?.value &&
        this.itemImage?.value
      ) {
        let price = parseInt(this.itemPrice?.value);
        let comida: Food = {
          image: this.itemImage?.value,
          name: this.itemName?.value,
          description: this.itemDescription?.value,
          category: this.itemCategory?.value,
          price: price,
        };
        this.servicioComida.addFood(comida).subscribe({
          next: (value) => (this.food = value),
          error: () => console.error('Error'),
          complete: () => console.info('Complete'),
        });
        //this.servicioComida.addFood(comida);
        this.router.navigate(['/food/food-list']);
      }
    }
  }

  get itemImage() {
    return this.foodForm.get('itemImage');
  }

  get itemName() {
    return this.foodForm.get('itemName');
  }

  get itemCategory() {
    return this.foodForm.get('itemCategory');
  }

  get itemDescription() {
    return this.foodForm.get('itemDescription');
  }

  get itemPrice() {
    return this.foodForm.get('itemPrice');
  }
}
