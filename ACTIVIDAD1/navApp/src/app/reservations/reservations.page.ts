import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonList, IonItem, IonIcon, IonButtons, IonBackButton]
})
export class ReservationsPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  nuevaReserva(){
    this.navCtrl.navigateForward('/reserve');
  }

}
