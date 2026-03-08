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

  constructor() { }

  ngOnInit() {
  }

}
