/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useReducer } from 'react';
import { ChairsContext } from './chairContext';
import chairService from '../services/chairService';
import type { ChairAction, NewChairForm } from '../types/chair';
import chairsReducer from './chairsReducer';

type ChairsProviderProps = {
  children: JSX.Element;
};

export default function ChairsProvider({
  children,
}: ChairsProviderProps): JSX.Element {
  const [chairs, dispatch] = useReducer(chairsReducer, []);

  useEffect(() => {
    chairService
      .getAllChairs()
      .then((data) => {
        const action: ChairAction = {
          type: 'SET_ALL_CHAIRS',
          payload: data,
        };
        dispatch(action);
      })
      .catch(console.log);
  }, []);

  const addChairHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as NewChairForm;
    const newChair = await chairService.sendNewChair(formData);
    const action: ChairAction = { type: 'ADD_CHAIR', payload: newChair };
    dispatch(action);
  };

//   const contextValue = useMemo(() => ({ chairs, addChairHandler }), [chairs]);

  return (
    <ChairsContext.Provider value={{ chairs, addChairHandler }}>
      {children}
    </ChairsContext.Provider>
  );
}
