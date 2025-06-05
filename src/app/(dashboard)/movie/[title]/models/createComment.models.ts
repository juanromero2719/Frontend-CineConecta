import { Movie }from "@/app/(dashboard)/dashboard/models/movies.models";

export interface CreateCommentRequest {
    movie_id: number;
    content: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  }
  
  export interface Comment {
    id: number;
    user_id: number;
    movie_id: number;
    content: string;
    sentiment: string;
    sentiment_score: number;
    created_at: string;
    updated_at: string;
    user: User;
    movie: Movie;
  }
  
  export interface SentimentInfo {
    description: string;
    rating: number;
    sentiment: string;
    sentiment_text: string;
  }
  
  export interface CommentResponse {
    comment: Comment;
    message: string;
    sentiment_info: SentimentInfo;
  }
  
    