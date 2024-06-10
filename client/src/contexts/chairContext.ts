import { createContext, useContext } from 'react';
import type { ChairContextValue } from '../types/chair';

const ChairsContext = createContext<ChairContextValue | null>(null);

function useChairsContext(): ChairContextValue {
  const context = useContext(ChairsContext);

  if (!context) {
    throw new Error('useChairsContext must be used within a ChairsContextProvider');
  }
  return context;
}

export { ChairsContext, useChairsContext };
