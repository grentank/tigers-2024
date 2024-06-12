import type { AxiosError } from 'axios';
import axios from 'axios';
import type { AppStore } from '../redux/store';
import type { AuthState } from '../types/user';

let store: AppStore | undefined;

export function injectStore(_store: AppStore): void {
  store = _store;
}

const httpClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${store?.getState().auth.accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (res) => res,
  async (err: AxiosError & { config: { sent?: boolean } }) => {
    const prevRequest = err.config; // необходимо чтобы понять что это второй запрос
    if (err.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const {
        data: { accessToken },
      } = await axios<AuthState>('/api/tokens/refresh');
      store?.dispatch({ type: 'auth/setAccessToken', payload: accessToken });
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return httpClient(prevRequest);
    }
    return Promise.reject(err);
  },
);

export default httpClient;
