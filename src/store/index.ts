import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

import {IStock} from '~src/types';

import {mmkvStorage} from './mmkv';

interface BearState {
  stocks: IStock[];
  setStocks: (stocks: IStock[]) => void;
}

export const useStockStore = create<BearState>()(
  persist(
    set => ({
      stocks: [],
      setStocks: (stocks: IStock[]) => set(() => ({stocks})),
    }),
    {
      name: 'bear-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
