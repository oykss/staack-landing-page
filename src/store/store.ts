import { create } from 'zustand';
import type { typeMediaSlice } from './mediaSlice/slice';
import { createMediaSlice } from './mediaSlice/slice';

type Store = typeMediaSlice;

const useStore = create<Store>()((...a) => ({
  ...createMediaSlice(...a),
}));

export default useStore;
