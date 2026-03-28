import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() titulo: string = '';
  @Input() mostrarAtras: boolean = false;
  @Input() backHref: string = '/home';
  @Output() accionPapelera = new EventEmitter<void>();

  constructor() {
    addIcons({ 'trash-outline': trashOutline });
  }

  onBorrar() {
    this.accionPapelera.emit();
  }
}
