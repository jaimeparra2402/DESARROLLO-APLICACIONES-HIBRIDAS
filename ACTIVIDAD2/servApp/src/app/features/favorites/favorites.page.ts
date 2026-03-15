import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonThumbnail,
  IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { MovieService } from '../../core/services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, RouterLink, IonThumbnail,
    IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonLabel]
})
export class FavoritesPage implements OnInit {

  public movieService = inject(MovieService);

  constructor() {
    addIcons({ trash }); 
  }

  removeFav(movie: any) {
    this.movieService.toggleFavorite(movie);
  }
  ngOnInit() {
  }

}
