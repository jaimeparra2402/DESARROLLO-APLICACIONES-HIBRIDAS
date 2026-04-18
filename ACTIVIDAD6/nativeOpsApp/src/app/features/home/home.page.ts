import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, list, trashOutline } from 'ionicons/icons';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonButton,
    HeaderComponent,
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      addCircle,
      list,
      trashOutline: trashOutline,
    });
  }

  borrarTodo() {
    localStorage.clear();
    window.location.reload();
  }
}
