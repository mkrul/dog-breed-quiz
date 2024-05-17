import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type SelectionType = {
  imageUrl: string;
  correctGuess: boolean;
  dir: string;
  image: string;
};

const selectionSchema = new Schema({
  imageUrl: { type: String, required: true },
  correctGuess: { type: Boolean, default: false },
  dir: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("Selection", selectionSchema);