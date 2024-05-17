import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type DogType = {
  dir: string,
  apbt: number,
  ast: number,
  sbt: number,
  ab: number
}

const dogSchema = new Schema({
  dir: { type: String, required: true },
  apbt: { type: Number, default: 0 },
  ast: { type: Number, default: 0 },
  sbt: { type: Number, default: 0 },
  ab: { type: Number, default: 0 }
});

export default mongoose.model('Dog', dogSchema);
