export interface TimelineEvent {
  date: string;
  location: string;
  description: string;
  value: number;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: 'Jan 24',
    location: 'Paris',
    description: 'Winter in the City of Light',
    value: 30
  },
  {
    date: 'Apr 24',
    location: 'Rome',
    description: 'Spring in the Eternal City',
    value: 65
  }
];