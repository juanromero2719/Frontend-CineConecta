import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";
  
export interface FeaturedMoviesResponse {
    user_id: string;
    limit: number;
    count: number;
    movies: Movie[];
}