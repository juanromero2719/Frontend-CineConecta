import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";
  
export interface MovieListResponse {
    count: number;
    results: Movie[];
}