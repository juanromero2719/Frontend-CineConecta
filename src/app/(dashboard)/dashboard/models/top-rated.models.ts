import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";
  
export interface MovieTopRatedResponse {
    movies: MovieTopRated[];
    count: number;
    message: string;
    results: MovieTopRated[];
}

export interface MovieTopRated {
    movie: Movie;
    average_score: number;
    comment_count: number;
}