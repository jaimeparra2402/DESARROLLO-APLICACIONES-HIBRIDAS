import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  addDoc,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from './auth.service';
import { Product } from '../models/product.model';
import { switchMap, of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private productsCollection = collection(this.firestore, 'products');

  private products$ = this.authService.user$.pipe(
    switchMap((user) => {
      if (user) {
        const q = query(
          this.productsCollection,
          where('userId', '==', user.uid),
        );
        return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
      } else {
        return of([]);
      }
    }),
  );

  async deleteProduct(productId: string) {
    const productDocRef = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productDocRef);
  }

  private allProducts$ = collectionData(this.productsCollection, {
    idField: 'id',
  }) as Observable<Product[]>;

  public products = toSignal(this.products$, { initialValue: [] });
  public allProducts = toSignal(this.allProducts$, { initialValue: [] });

  async addProduct(product: Product) {
    const uid = this.authService.getUID();
    if (!uid) throw new Error('No hay usuario autenticado');
    return addDoc(this.productsCollection, {
      ...product,
      userId: uid,
    });
  }
}
