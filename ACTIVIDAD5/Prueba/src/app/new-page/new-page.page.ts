import { Component, Input, OnInit } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons,
  ],
})
export class NewPagePage implements OnInit {
  @Input() word?: string = '';

  ngOnInit() {
    console.log('Palabra recibida:', this.word);
  }
}
