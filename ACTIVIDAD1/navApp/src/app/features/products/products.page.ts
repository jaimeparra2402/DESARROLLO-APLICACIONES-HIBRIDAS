import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonThumbnail, IonNote, IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonList, IonItem, IonThumbnail, IonNote, IonButtons, IonBackButton, IonButton]
})
export class ProductsPage implements OnInit {

  products = [
    { 
      id: 1,
      name: 'Producto A',
      price: 25.00,
      stock: 10,
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    { 
      id: 2,
      name: 'Producto B',
      price: 12.50,
      stock: 5,
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
    { 
      id: 3,
      name: 'Producto C',
      price: 40.00,
      stock: 3,
      image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();

    window.location.replace('/login'); 
/*     this.navCtrl.navigateRoot('/login', { replaceUrl: true });
 */  }

}
