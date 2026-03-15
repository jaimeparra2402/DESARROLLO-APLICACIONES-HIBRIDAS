export interface OMDbMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails extends OMDbMovie {
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  Released: string;
}

export interface OMDbSearchApiResponse {
  Search: OMDbMovie[];
  totalResults: string;
  Response: string;
}