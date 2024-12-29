import { useMemo } from 'react';

interface TimelinePoint {
  year: string;
  event: string;
  value: number;
}

export function useTimelineData() {
  const data = useMemo<TimelinePoint[]>(() => [
    { year: '2025', event: 'Trip to Bali', value: 25 },
    { year: '2026', event: 'Miami Weekend', value: 65 },
    { year: '2027', event: 'Northern Lights', value: 85 }
  ], []);

  return { data };
}