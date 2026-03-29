import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, ViewWillEnter } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ProductsService } from '../../core/services/products.service';
import { add, logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ProductsPage {
  public productService = inject(ProductsService);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    addIcons({ add, logOutOutline });
  }

  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  showDetails(product: Product) {
    this.router.navigate(['/details-product', product.id]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
