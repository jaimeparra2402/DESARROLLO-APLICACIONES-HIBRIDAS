import { Component, inject, OnInit } from '@angular/core'; // Añadida la interfaz OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonButtons,
  IonBackButton,
  ToastController,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { IncidenciasService } from '../../core/services/incidencias.service';
import { addIcons } from 'ionicons';
import {
  camera,
  imageOutline,
  save,
  checkmarkCircle,
  trashOutline,
} from 'ionicons/icons';
import { HeaderComponent } from 'src/app/shared/header/header.component';

import { defineCustomElements as registerPWA } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-alta-incidencia',
  templateUrl: './alta-incidencia.page.html',
  styleUrl: './alta-incidencia.page.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonButtons,
    IonBackButton,
    HeaderComponent,
  ],
})
export class AltaIncidenciaPage implements OnInit {
  // Agregado implements OnInit
  private service = inject(IncidenciasService);
  private toastCtrl = inject(ToastController);

  titulo: string = '';
  fotoUri: string | undefined = undefined;
  latitud: number | undefined = undefined;
  longitud: number | undefined = undefined;

  constructor() {
    addIcons({
      imageOutline,
      trashOutline,
      camera,
      save,
      checkmarkCircle,
    });
  }

  async ngOnInit() {}

  async tomarFotoYPosicion() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      this.fotoUri = image.webPath;

      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });
      this.latitud = coordinates.coords.latitude;
      this.longitud = coordinates.coords.longitude;
    } catch (e: any) {
      console.warn('Operación cancelada o fallida:', e);
    }
  }

  async guardar() {
    if (this.fotoUri && this.latitud && this.longitud) {
      await this.service.guardarIncidencia({
        titulo: this.titulo,
        foto: this.fotoUri,
        latitud: this.latitud,
        longitud: this.longitud,
      });

      await this.mostrarMensaje('Incidencia guardada con éxito');
      this.limpiarFormulario();
    } else {
      console.warn('Faltan datos para guardar la incidencia');
    }
  }

  async mostrarMensaje(texto: string) {
    const toast = await this.toastCtrl.create({
      message: texto,
      duration: 2000,
      position: 'bottom',
      color: 'success',
      icon: 'checkmark-circle',
    });
    await toast.present();
  }

  limpiarFormulario() {
    this.titulo = '';
    this.fotoUri = undefined;
    this.latitud = undefined;
    this.longitud = undefined;
  }

  borrarFoto() {
    this.fotoUri = undefined;
    this.latitud = undefined;
    this.longitud = undefined;
  }

  borrarTodo() {
    localStorage.clear();
    window.location.reload();
  }
}
