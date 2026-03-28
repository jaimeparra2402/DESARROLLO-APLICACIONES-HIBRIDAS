import { Component, inject } from '@angular/core';
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
export class AltaIncidenciaPage {
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
      checkmarkCircle: checkmarkCircle,
    });
  }

  async tomarFotoYPosicion() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      this.fotoUri = image.webPath;

      const coordinates = await Geolocation.getCurrentPosition();
      this.latitud = coordinates.coords.latitude;
      this.longitud = coordinates.coords.longitude;
    } catch (e) {
      console.error('Captura cancelada o fallida');
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
