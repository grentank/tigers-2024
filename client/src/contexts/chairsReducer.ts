import type { ChairAction, ChairsStateType } from '../types/chair';

export default function chairsReducer(
  state: ChairsStateType,
  action: ChairAction,
): ChairsStateType {
  const { type } = action;
  switch (type) {
    case 'SET_ALL_CHAIRS':
      return action.payload;
    case 'ADD_CHAIR':
      return [...state, action.payload];
    case 'DELETE_CHAIR':
      return state.filter((chair) => chair.id !== action.payload);
    case 'CLEAR_ALL_CHAIRS':
      return [];
    case 'SORT_BY_ASC_NAME':
      return state.toSorted((c1, c2) => c1.name.localeCompare(c2.name));
    default:
      return state;
  }
}
