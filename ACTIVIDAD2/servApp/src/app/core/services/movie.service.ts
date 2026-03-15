import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OMDbMovie, MovieDetails, OMDbSearchApiResponse } from '../models/movies.model';

@Injectable({ 
  providedIn: 'root' 
})

export class MovieService {

  private http = inject(HttpClient); 
  private readonly API_URL =
  `https://www.omdbapi.com/?apikey=${environment.apiKeyOMDb}`; 

  private _movies = signal<OMDbMovie[]>([]); 
  public movies = this._movies.asReadonly();

  private _lastQuery = signal<string>('');
  public lastQuery = this._lastQuery.asReadonly();
  
  private _currentMovie = signal<MovieDetails | null>(null);
  public currentMovie = this._currentMovie.asReadonly();

  private _favorites = signal<OMDbMovie[]>([]);
  public favorites = this._favorites.asReadonly();

  /* Computed: Contador que modifica los favoritos en tiempo real y las peliculas*/

  public favoritesCount = computed(() => this._favorites().length);
  
  public totalResults = computed(() => this._movies().length); 

  searchMovies(title: string) { 
    this._lastQuery.set(title);

    this.http.get<OMDbSearchApiResponse>(`${this.API_URL}&s=${title}`)
    .subscribe(response => {
      if (response.Response === 'True') {
        this._movies.set(response.Search);
      } else {
        this._movies.set([]);
      }
    });
  }

  getMovieDetails(id: string) {
    this._currentMovie.set(null);
    this.http.get<MovieDetails>(`${this.API_URL}&i=${id}`)
      .subscribe(response => {
        this._currentMovie.set(response);
      });
  }

  isFavorite(movieId: string) {
    return this._favorites().some(m => m.imdbID === movieId);
  }

  toggleFavorite(movie: OMDbMovie) {
    const current = this._favorites();
    const index = current.findIndex(m => m.imdbID === movie.imdbID);

    if (index > -1) {
      this._favorites.set(current.filter(m => m.imdbID !== movie.imdbID));
    } else {
      this._favorites.set([...current, movie]);
    }
  }

}