import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type BackendUser = z.infer<typeof userSchema>;

export const authSchema = z.object({
  user: userSchema,
  accessToken: z.string(),
});

export type UserState =
  | {
      status: 'pending';
    }
  | {
      status: 'guest';
    }
  | ({
      status: 'logged';
    } & BackendUser);

export type AuthState = {
  user: UserState;
  accessToken: string;
};

export const signupFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type SignupFormType = z.infer<typeof signupFormSchema>;
