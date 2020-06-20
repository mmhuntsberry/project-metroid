export interface GameModel {
  title: string;
  release_year: number;
  developer: string;
  hero: string;
  box_art: string;
  synopsis: string;
  description: string;
  trailer: string;
  rating: string;
  platform: string;
  theme: string;
  genre: string;
}

export interface ReviewModel {
  review: string;
  game: string;
  user: object;
  timestamp: string;
  rating: number;
}
