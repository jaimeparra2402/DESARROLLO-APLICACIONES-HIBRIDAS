import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, HeaderComponent],
})
export class HomePage {
  private router = inject(Router);

  constructor() {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToProducts() {
    this.router.navigate(['/public-products']);
  }
}
