import { useMemo } from 'react';

interface NetworkData {
  network: string;
  value: number;
}

export function useNetworkData() {
  const networkData = useMemo<NetworkData[]>(() => [
    { network: 'Discover', value: 5 },
    { network: 'Amex', value: 3 },
    { network: 'Mastercard', value: 8 },
    { network: 'Visa', value: 10 },
  ], []);

  return { networkData };
}