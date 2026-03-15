import { Component, inject } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonSearchbar,
  IonButtons, IonButton, IonIcon, IonBadge 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons'; 
import { MovieService } from '../../core/services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonItem, IonLabel, IonSearchbar,
    IonButtons, IonButton, IonIcon, IonBadge 
  ],
})
export class HomePage {
  public movieService = inject(MovieService);

  constructor() {
    addIcons({ heart });
  }

  onSearch(event: any) {
    const query = event.detail.value;
    if (query) {
      this.movieService.searchMovies(query);
    }
  }
}