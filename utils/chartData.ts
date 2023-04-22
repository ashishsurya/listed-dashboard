export type WeeklyActivities = {
  week: string;
  activities: number;
};

export type Series = {
  label: string;
  data: WeeklyActivities[];
};

export const chartData: Series[] = [
  {
    label: 'User',
    data: [
      { week: 'Week 1', activities: 410 },
      { week: 'Week 2', activities: 150 },
      { week: 'Week 3', activities: 450 },
      { week: 'Week 4', activities: 190 },
    ],
  },
];
