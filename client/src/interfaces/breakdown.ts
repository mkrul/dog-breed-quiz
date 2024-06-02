import { TopUser } from './topUser';

export interface Breakdown {
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
  topUsers: TopUser[];
}