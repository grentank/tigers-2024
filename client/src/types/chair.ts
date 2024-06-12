import { z } from 'zod';
import { userSchema } from './user';

// export type ChairType = {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   dimensions: string;
//   createdAt: string;
// };

export const chairSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  dimensions: z.string(),
  createdAt: z.string().datetime(),
  User: userSchema
});

export type ChairType = z.infer<typeof chairSchema>;

// export type ChairContextValue = {
//   chairs: ChairType[];
//   addChairHandler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
// };

export type NewChairForm = Omit<ChairType, 'id' | 'createdAt'>;

export type ChairsStateType = {
  chairs: ChairType[];
  isLoading: boolean;
  error: string | null;
  currentChair: ChairType | null;
  favoriteChairs: ChairType[];
};

// export type ChairsStateType = ChairType[];

// export type ChairAction =
//   | {
//       type: 'SET_ALL_CHAIRS';
//       payload: ChairType[];
//     }
//   | {
//       type: 'CLEAR_ALL_CHAIRS';
//     }
//   | {
//       type: 'DELETE_CHAIR';
//       payload: ChairType['id'];
//     }
//   | {
//       type: 'ADD_CHAIR';
//       payload: ChairType;
//     }
//   | {
//       type: 'MODIFY_CHAIR';
//       payload: ChairType;
//     }
//   | {
//       type: 'SORT_BY_ASC_NAME';
//     };
