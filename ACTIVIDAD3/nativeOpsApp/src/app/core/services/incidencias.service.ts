import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Incidencia {
  id: number;
  titulo: string;
  foto: any;
  latitud: number;
  longitud: number;
}

@Injectable({ providedIn: 'root' })
export class IncidenciasService {
  private sanitizer = inject(DomSanitizer);
  private incidencias: Incidencia[] = [];

  constructor() {}

  getIncidencias() {
    const saved = localStorage.getItem('incidencias');
    this.incidencias = saved ? JSON.parse(saved) : [];

    return this.incidencias.map((inc) => ({
      ...inc,
      foto: this.sanitizer.bypassSecurityTrustResourceUrl(inc.foto),
    }));
  }

  async guardarIncidencia(incidencia: Omit<Incidencia, 'id'>) {
    const nueva = { ...incidencia, id: Date.now() };
    this.incidencias.push(nueva);
    localStorage.setItem('incidencias', JSON.stringify(this.incidencias));
  }
}
