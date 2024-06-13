import type { AxiosInstance } from 'axios';
import { chairSchema, type ChairType, type NewChairForm } from '../types/chair';
import axiosClient from './httpClient';

class ChairService {
  constructor(private readonly client: AxiosInstance) {}

  async getAllChairs(): Promise<ChairType[]> {
    // getTodos,
    try {
      const res = await this.client('/chairs');
      if (res.status === 200) {
        return chairSchema.array().parse(res.data);
      }
      return [];
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('неверный статус код стульев'));
    }
  }

  async sendNewChair(formData: NewChairForm): Promise<ChairType> {
    const res = await this.client.post('/chairs', formData);
    if (res.status === 201) {
      return chairSchema.parse(res.data);
    }
    return Promise.reject(new Error('неверный статус код стульев'));
  }

  async deleteChairById(id: ChairType['id']): Promise<ChairType['id']> {
    const res = await this.client.delete(`/chairs/${id}`);
    if (res.status === 204) {
      return id;
    }
    return Promise.reject(new Error('неверный статус код удаления'));
  }

  async getOneChair(
    id: ChairType['id'],
    signal: AbortSignal,
  ): Promise<ChairType> {
    const res = await this.client(`/chairs/${id}`, { signal });
    if (res.status === 200) {
      return chairSchema.parse(res.data);
    }
    return Promise.reject(new Error('неверный статус код стульев'));
  }

  async editOneChair(chair: ChairType): Promise<ChairType> {
    const res = await this.client.put(`/chairs/${chair.id}`, chair);
    if (res.status === 200) {
      return chairSchema.parse(res.data);
    }
    return Promise.reject(new Error('неверный статус код стульев'));
  }
}

const chairService = new ChairService(axiosClient);

export default chairService;
