import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type BreedType = {
  name: string;
  label: string;
  selected: boolean;
};

const breedSchema = new Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  selected: { type: Boolean, default: false },
});

export default mongoose.model("Breed", breedSchema);