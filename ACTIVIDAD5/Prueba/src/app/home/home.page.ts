import { Component, inject, model, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { GenerateTextService } from '../services/generate-text.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule,
    RouterLink,
  ],
})
export class HomePage {
  public title = signal('Home Page');
  public word = model('initial word');

  public testservice = inject(GenerateTextService);

  getWord() {
    this.word.set(this.testservice.getRandomWord());
  }

  changeTitle(title: string) {
    this.title.set(title);
  }
}
