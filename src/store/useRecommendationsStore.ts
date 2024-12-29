import { create } from 'zustand';

interface RecommendationsState {
  recommendations: string | null;
  isLoading: boolean;
  error: string | null;
  setRecommendations: (recommendations: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useRecommendationsStore = create<RecommendationsState>((set) => ({
  recommendations: null,
  isLoading: false,
  error: null,
  setRecommendations: (recommendations) => set({ recommendations }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));