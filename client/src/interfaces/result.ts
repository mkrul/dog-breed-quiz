import { Selection } from './selection';

export interface Result {
  totalDogs: number;
  totalSelected: number;
  totalCorrectGuesses: number;
  totalIncorrectGuesses: number;
  totalSkipped: number;
  userAccuracy: number;
  selections: Selection[];
  completed: number;
}