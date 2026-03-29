import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  IonicModule,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
})
export class LoginPage {
  private authService = inject(AuthService);
  private toastController = inject(ToastController);
  private loadingController = inject(LoadingController);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  async login() {
    if (this.loginForm.invalid) {
      this.showErrorMessage('Por favor, completa los campos correctamente.');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      spinner: 'crescent'
    });
    
    await loading.present();

    const { email, password } = this.loginForm.value;

    try {
      await this.authService.login(email!, password!);
      this.showInfoMessage('Inicio de sesión realizado. Redirigiendo...');
      
      setTimeout(() => {
        this.router.navigate(["/products"]);
      }, 2000);

    } catch (error: any) {
      let errorMessage = 'Hubo un error al intentar iniciar sesión.';

      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'El correo electrónico no está registrado.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'La contraseña es incorrecta.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El formato del correo no es válido.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Las credenciales no coinciden o han expirado.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Demasiados intentos fallidos. Intenta más tarde.';
          break;
      }

      this.showErrorMessage(errorMessage);

    } finally {
      loading.dismiss();
    }
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  async showInfoMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }
}
