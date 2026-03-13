import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonAvatar, IonList, IonItem, IonButtons, IonBackButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonContent, RouterLink, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonAvatar, IonList, IonItem, IonButtons, IonBackButton]
})
export class ClientsPage implements OnInit {

  clients = [
    { id: 1, name: 'Juan Pérez', description: 'Cliente VIP - Madrid', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 2, name: 'María García', description: 'Cliente Frecuente - Barcelona', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 3, name: 'Luis Fernández', description: 'Cliente Nuevo - Valencia', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
