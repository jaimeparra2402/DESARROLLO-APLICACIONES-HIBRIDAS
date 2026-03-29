import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, ViewWillEnter } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ProductsService } from '../../core/services/products.service';
import { add, logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Product } from 'src/app/core/models/product.model';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ListComponent } from 'src/app/shared/list/list.component';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  imports: [IonicModule, CommonModule, HeaderComponent, ListComponent],
})
export class ProductsPage {
  public productService = inject(ProductsService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastController = inject(ToastController);
  private alertController = inject(AlertController);

  constructor() {
    addIcons({ add, logOutOutline });
  }

  goToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  showDetails(product: Product) {
    this.router.navigate(['/details-product', product.id]);
  }

  async confirmDelete(product: any) {
  const alert = await this.alertController.create({
    header: '¿Eliminar producto?',
    subHeader: product.name,
    message: 'Esta acción no se puede deshacer.',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Eliminar',
        role: 'destructive',
        handler: () => {
          this.executeDelete(product.id);
        }
      }
    ]
  });

  await alert.present();
}

private async executeDelete(id: string) {
  try {
    await this.productService.deleteProduct(id);
    const toast = await this.toastController.create({
      message: 'Producto eliminado',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  } catch (error) {
    console.error('Error al borrar:', error);
  }
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
