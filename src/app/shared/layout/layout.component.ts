import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatIconModule , MatButtonModule, MatToolbarModule, MatSidenavModule ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  opened = true

  public open(){
    this.opened = !this.opened
  }

}
