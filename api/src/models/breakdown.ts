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
  allUsersAccuracy: number;
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
  proPercentage25: number;
  proPercentage50: number;
  proPercentage75: number;
  proPercentageGreaterThan75: number;
  moderatePercentage25: number;
  moderatePercentage50: number;
  moderatePercentage75: number;
  moderatePercentageGreaterThan75: number;
  antiPercentage25: number;
  antiPercentage50: number;
  antiPercentage75: number;
  antiPercentageGreaterThan75: number;
  antiApbt: number;
  antiAst: number;
  antiSbt: number;
  antiAb: number;
  proApbt: number;
  proAst: number;
  proSbt: number;
  proAb: number;
  moderateApbt: number;
  moderateAst: number;
  moderateSbt: number;
  moderateAb: number;
}

const breakdownSchema = new Schema({
  proAccuracy: { type: Number, default: 0 },
  moderateAccuracy: { type: Number, default: 0 },
  antiAccuracy: { type: Number, default: 0 },
  proCount: { type: Number, default: 0 },
  moderateCount: { type: Number, default: 0 },
  antiCount: { type: Number, default: 0 },
  allUsersAccuracy: { type: Number, default: 0 },
  proApbtCount: { type: Number, default: 0 },
  proApbtAccuracy: { type: Number, default: 0 },
  proMultiCount: { type: Number, default: 0 },
  proMultiAccuracy: { type: Number, default: 0 },
  moderateApbtCount: { type: Number, default: 0 },
  moderateApbtAccuracy: { type: Number, default: 0 },
  antiApbtCount: { type: Number, default: 0 },
  antiApbtAccuracy: { type: Number, default: 0 },
  topUsers: { type: Array, default: [] },
  proPercentage25: { type: Number, default: 0 },
  proPercentage50: { type: Number, default: 0 },
  proPercentage75: { type: Number, default: 0 },
  proPercentageGreaterThan75: { type: Number, default: 0 },
  moderatePercentage25: { type: Number, default: 0 },
  moderatePercentage50: { type: Number, default: 0 },
  moderatePercentage75: { type: Number, default: 0 },
  moderatePercentageGreaterThan75: { type: Number, default: 0 },
  antiPercentage25: { type: Number, default: 0 },
  antiPercentage50: { type: Number, default: 0 },
  antiPercentage75: { type: Number, default: 0 },
  antiPercentageGreaterThan75: { type: Number, default: 0 },
  antiApbt: { type: Number, default: 0 },
  antiAst: { type: Number, default: 0 },
  antiSbt: { type: Number, default: 0 },
  antiAb: { type: Number, default: 0 },
  proApbt: { type: Number, default: 0 },
  proAst: { type: Number, default: 0 },
  proSbt: { type: Number, default: 0 },
  proAb: { type: Number, default: 0 },
  moderateApbt: { type: Number, default: 0 },
  moderateAst: { type: Number, default: 0 },
  moderateSbt: { type: Number, default: 0 },
  moderateAb: { type: Number, default: 0 }
});

export default mongoose.model('Breakdown', breakdownSchema);