
export interface ActivityItem {
  id: number;
  account_id: number;
  type: string;
  description: string;
  origin?: string;
  destination?: string;
  amount: number;
  dated: string;
}

export interface ActivityList {
  activityList: ActivityItem[];
}