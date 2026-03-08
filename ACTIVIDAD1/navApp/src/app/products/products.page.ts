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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();

    this.navCtrl.navigateRoot('/login', { replaceUrl: true });
  }

}
