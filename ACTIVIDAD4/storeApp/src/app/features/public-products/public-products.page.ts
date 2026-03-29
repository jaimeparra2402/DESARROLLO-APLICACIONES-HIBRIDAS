import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-public-products',
  standalone: true,
  templateUrl: './public-products.page.html',
  imports: [IonicModule, CommonModule],
})
export class PublicProductsPage {
  public productService = inject(ProductsService);
  private router = inject(Router);

  constructor() {}
}
