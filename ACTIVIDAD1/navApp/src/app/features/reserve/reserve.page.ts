import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonCardSubtitle, IonInput, IonButton, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonLabel, IonItem, IonCardTitle, IonDatetime } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
  standalone: true,
  imports: [RouterLink,IonDatetime, IonCardContent, IonCardSubtitle, IonInput, IonButton, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButtons, IonBackButton, IonItem, IonLabel, IonCard, IonCardTitle, FormsModule]
})
export class ReservePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
