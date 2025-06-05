import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";

export interface MoviesFilterByGenresResponse {
    count: number;
    filters: MovieFilters;
    results: Movie[];
}
  
export interface MovieFilters {
    title: string;
    genre: string;
    rating: number;
}
  

  