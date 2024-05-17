import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import settings, { SettingsType } from './settings';
import breed, { BreedType } from './breed';
import result, { ResultType } from './result';

const Schema = mongoose.Schema;

export type UserType = {
  _id: ObjectId,
  username: string,
  alignment: string,
  percentage: number,
  breeds: BreedType[],
  createdAt: Date,
  settings: SettingsType,
  results: ResultType[],
  accuracy: number
}

const userSchema = new Schema({
  username: { type: String, default: '' },
  alignment: { type: String, default: '' },
  percentage: { type: Number, default: 0 },
  breeds: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  settings: { type: Object, default: settings },
  results: { type: Array, default: [] },
  accuracy: { type: Number, default: 0 }
});

export default mongoose.model('User', userSchema);
