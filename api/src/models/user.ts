import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Schema = mongoose.Schema;

export type UserType = {
  _id: ObjectId,
  ipAddress: string,
  alignment: string,
  createdAt: Date
}

const userSchema = new Schema({
  ipAddress: { type: String, required: true },
  alignment: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
