import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-details-product',
  standalone: true,
  templateUrl: './details-product.page.html',
  imports: [IonicModule, CommonModule],
})
export class DetailsProductPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductsService);

  private alertController = inject(AlertController);
  private toastController = inject(ToastController);

  public product = signal<any>(undefined);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const foundProduct = this.productService
        .allProducts()
        .find((p) => p.id === id);
      this.product.set(foundProduct);
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: '¿Eliminar producto?',
      message: 'Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => this.delete(),
        },
      ],
    });
    await alert.present();
  }

  private async delete() {
    try {
      await this.productService.deleteProduct(this.product().id);
      const toast = await this.toastController.create({
        message: 'Producto eliminado correctamente',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
      this.router.navigate(['/products']);
    } catch (error) {
      console.error(error);
    }
  }
}
