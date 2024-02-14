import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatIconModule , MatButtonModule, MatToolbarModule, MatSidenavModule, RouterModule, MatListModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  opened = true



  public links = [

    {
      icon: 'restaurant_menu',
      label: 'Comidas',
      routerlink: 'food/food-list'
    },
    {
      icon: 'lunch_dining',
      label: 'Agregar comidas',
      routerlink: 'food/food-form'
    }
    


  ];

  public open(){
    this.opened = !this.opened
  }

}
