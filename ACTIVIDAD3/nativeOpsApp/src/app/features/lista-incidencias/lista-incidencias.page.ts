import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  ToastController,
} from '@ionic/angular/standalone';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { IncidenciasService } from '../../core/services/incidencias.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    DataTableComponent,
    HeaderComponent,
  ],
})
export class ListaIncidenciasPage implements OnInit {
  private service = inject(IncidenciasService);
  private toastCtrl = inject(ToastController);

  public incidenciasAdaptadas: any[] = [];
  public columnas = ['Título', 'Coordenadas', 'Foto'];

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const datosRaw = this.service.getIncidencias();
    this.incidenciasAdaptadas = datosRaw.map((inc) => ({
      title: inc.titulo,
      lat: inc.latitud,
      lng: inc.longitud,
      photo: inc.foto,
    }));
  }

  async mostrarAvisoConstruccion() {
    const toast = await this.toastCtrl.create({
      message: 'Esta parte de la aplicación está "En construcción"',
      duration: 2000,
      position: 'middle',
      color: 'warning',
    });
    await toast.present();
  }

  borrarTodo() {
    localStorage.clear();
    window.location.reload();
  }
}
