import mongoose, { ObjectId } from 'mongoose';

const Schema = mongoose.Schema;

export type UserType = {
  ipAddress: string,
  createdAt: Date
}

const userSchema = new Schema({
  ipAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
