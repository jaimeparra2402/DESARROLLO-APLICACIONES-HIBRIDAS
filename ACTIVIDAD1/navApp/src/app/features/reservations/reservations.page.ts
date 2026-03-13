import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonButton,
  IonFabButton,
  IonFab,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'; 

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonButtons,
    IonBackButton,
  ],
})
export class ReservationsPage implements OnInit {
  reservations = [
    { id: 1, title: 'Reserva 1', date: '15/03/2026', time: '21:00' },
    { id: 2, title: 'Reserva 2', date: '16/03/2026', time: '14:00' },
    { id: 3, title: 'Reserva 3', date: '17/03/2026', time: '18:30' },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    addIcons({ add });
  }

  nuevaReserva() {
    this.navCtrl.navigateForward(`/tabs/reservations/reserve`);
  }
}
