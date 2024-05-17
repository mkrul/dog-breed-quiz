import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type SettingsType = {
  alignment: string
  percentage: number
}

const settingsSchema = new Schema({
  alignment: { type: String, default: '' },
  percentage: { type: Number, default: 0 }
});

export default mongoose.model('Settings', settingsSchema);