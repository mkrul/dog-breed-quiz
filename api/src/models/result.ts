import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type ResultType = {
  totalDogs: number;
  totalSelected: number;
  totalCorrectGuesses: number;
  totalIncorrectGuesses: number;
  totalSkipped: number;
  userAccuracy: number;
  selections: Selection[];
  completed: number;
}

const resultSchema = new Schema({
  totalDogs: { type: Number, default: 0 },
  totalSelected: { type: Number, default: 0 },
  totalCorrectGuesses: { type: Number, default: 0 },
  totalIncorrectGuesses: { type: Number, default: 0 },
  totalSkipped: { type: Number, default: 0 },
  userAccuracy: { type: Number, default: 0 },
  selections: { type: Array, default: [] },
  completed: { type: Number, default: 0 }
});

export default mongoose.model('Result', resultSchema);