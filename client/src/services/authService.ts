import type { AxiosInstance } from 'axios';
import axios from 'axios';
import httpClient from './httpClient';
import { authSchema, type AuthState, type SignupFormType } from '../types/user';

class AuthService {
  constructor(private readonly client: AxiosInstance) {}

  async signup(signupFormData: SignupFormType): Promise<AuthState> {
    const res = await this.client.post('/auth/signup', signupFormData);
    if (res.status !== 200)
      return Promise.reject(new Error('Ошибка регистрации (статус не 200)'));
    const data = authSchema.parse(res.data);
    return { ...data, user: { ...data.user, status: 'logged' } };
  }

  async check(): Promise<AuthState> {
    const res = await this.client('/tokens/refresh');
    if (res.status !== 200)
      return Promise.reject(new Error('Ошибка регистрации (статус не 200)'));
    const data = authSchema.parse(res.data);
    return { ...data, user: { ...data.user, status: 'logged' } };
  }

  // eslint-disable-next-line class-methods-use-this
  async refresh(): Promise<string> {
    const res = await axios('/api/tokens/refresh');
    if (res.status !== 200)
      return Promise.reject(new Error('Ошибка регистрации (статус не 200)'));
    const data = authSchema.parse(res.data);
    return data.accessToken;
  }
}

const authService = new AuthService(httpClient);

export default authService;
