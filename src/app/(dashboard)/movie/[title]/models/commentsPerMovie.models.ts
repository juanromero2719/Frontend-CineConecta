export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  }
  
  export interface MovieReview {
    id: number;
    content: string;
    created_at: string; 
    movie_id: number;
    rating: number;
    rating_text: string;
    sentiment: string;
    sentiment_text: string;
    user_id: number;
    user: User;
  }
  