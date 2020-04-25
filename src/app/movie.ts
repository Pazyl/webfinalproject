import { Catalog } from './catalog';

export interface Movie {
  id: number;
  name: string;
  alterName: string;
  catalogType: Catalog;
  price: number;
  rating: number;
  viewCount: number;
  status: string;
  releaseDate: number;
  genre: string;
  studio: string;
  image1: string;
  description: string;
  ageLimit: number;
  screen_1_1: string;
  screen_1_2: string;
  screen_1_3: string;
  screen_1_4: string;
  screen_1_5: string;
}
