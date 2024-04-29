import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Schema = mongoose.Schema;

export type UserType = {
  _id: ObjectId,
  username: string,
  alignment: string,
  breeds: string[],
  createdAt: Date
}

const userSchema = new Schema({
  username: { type: String, required: true },
  alignment: { type: String, default: '' },
  breeds: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
