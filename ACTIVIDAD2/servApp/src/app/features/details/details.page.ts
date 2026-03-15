import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonCard, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonCardContent,
  IonBadge, IonList, IonItem, IonLabel, IonSpinner,
  IonIcon, IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonCard, IonCardHeader, 
    IonCardSubtitle, IonCardTitle, IonCardContent,
    IonBadge, IonList, IonItem, IonLabel, IonSpinner,
    IonIcon, IonButton
  ]
})
export class DetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  public movieService = inject(MovieService);

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieDetails(movieId);
    }
  }

  constructor() {
    addIcons({ heart, heartOutline });
  }

  toggleFav(movie: any) {
    this.movieService.toggleFavorite(movie);
  }
}