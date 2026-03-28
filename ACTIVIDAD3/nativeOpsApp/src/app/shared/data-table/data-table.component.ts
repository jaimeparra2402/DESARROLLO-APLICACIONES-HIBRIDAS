import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonText,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonNote,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonCard,
    IonCardTitle,
    IonIcon,
    IonCardHeader,
    IonNote,
  ],
})
export class DataTableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Output() clicked = new EventEmitter<void>();

  onItemClick() {
    this.clicked.emit();
  }
}
