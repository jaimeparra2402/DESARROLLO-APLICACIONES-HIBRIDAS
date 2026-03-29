import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Product } from '../../core/models/product.model';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() products: Product[] = [];
  @Input() emptyMessage: string = 'No hay productos disponibles.';
  @Input() canDelete: boolean = false;
  @Input() showAction: boolean = true;
  @Output() deleteProduct = new EventEmitter<Product>();

  @Output() viewDetails = new EventEmitter<Product>();

  constructor() {
    addIcons({ informationCircleOutline, trash });
  }

  onDeleteProduct(product: Product, slidingItem: any) {
    this.deleteProduct.emit(product);
    slidingItem.close();
  }
}
