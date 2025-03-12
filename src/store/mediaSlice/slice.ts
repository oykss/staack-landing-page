import { StateCreator } from 'zustand';

type typeMediaPoints = {
  isMobile: boolean | null;
  isTablet: boolean | null;
};

export type typeMediaSlice = {
  MediaPoints: typeMediaPoints;
  setIsMediaPoints: (obj: typeMediaPoints) => void;
};

export const createMediaSlice: StateCreator<typeMediaSlice> = set => ({
  MediaPoints: {
    isMobile: null,
    isTablet: null,
  },
  setIsMediaPoints: obj => set({ MediaPoints: obj }),
});
