import mongoose from 'mongoose';
import { UserType } from './user';

const Schema = mongoose.Schema;

export type BreakdownType = {
  proAccuracy: number;
  moderateAccuracy: number;
  antiAccuracy: number;
  proCount: number;
  moderateCount: number;
  antiCount: number;
  proApbtCount: number;
  proApbtAccuracy: number;
  proMultiCount: number;
  proMultiAccuracy: number;
  moderateApbtCount: number;
  moderateApbtAccuracy: number;
  moderateMultiCount: number;
  moderateMultiAccuracy: number;
  antiApbtCount: number;
  antiApbtAccuracy: number;
  antiMultiCount: number;
  antiMultiAccuracy: number;
  topUsers: UserType[];
}

const breakdownSchema = new Schema({
  proAccuracy: { type: Number, default: 0 },
  moderateAccuracy: { type: Number, default: 0 },
  antiAccuracy: { type: Number, default: 0 },
  proCount: { type: Number, default: 0 },
  moderateCount: { type: Number, default: 0 },
  antiCount: { type: Number, default: 0 },
  proApbtCount: { type: Number, default: 0 },
  proApbtAccuracy: { type: Number, default: 0 },
  proMultiCount: { type: Number, default: 0 },
  proMultiAccuracy: { type: Number, default: 0 },
  moderateApbtCount: { type: Number, default: 0 },
  moderateApbtAccuracy: { type: Number, default: 0 },
  antiApbtCount: { type: Number, default: 0 },
  antiApbtAccuracy: { type: Number, default: 0 },
  topUsers: { type: Array, default: [] }
});

export default mongoose.model('Breakdown', breakdownSchema);