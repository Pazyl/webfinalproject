import { User } from './User';

export interface Comment {
  id: number;
  userName: User;
  movieID: number;
  text: string;
}
