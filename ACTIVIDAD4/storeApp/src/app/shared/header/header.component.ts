import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, logOutOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Configuración de la cabecera
  @Input() title: string = '';
  @Input() backButton: boolean = false;
  @Input() defaultHref: string = '/home';
  @Input() showAdd: boolean = false;
  @Input() showLogout: boolean = false;
  @Input() showDelete: boolean = false;
  @Input() noBorder: boolean = false;

  // Eventos para avisar al padre
  @Output() onAdd = new EventEmitter<void>();
  @Output() onLogout = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  constructor() {
    addIcons({ add, logOutOutline, trashOutline });
  }
}