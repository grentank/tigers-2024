import type { AxiosInstance } from 'axios';
import type { ChairType, NewChairForm } from '../types/chair';
import axiosClient from './httpClient';

class ChairService {
  // readonly
  constructor(private client: AxiosInstance) {}

  async getAllChairs(): Promise<ChairType[]> {
    try {
      const res = await this.client<ChairType[]>('/chairs');
      if (res.status === 200) {
        return res.data;
      }
      return [];
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('неверный статус код стульев'));
    }
  }

  async sendNewChair(formData: NewChairForm): Promise<ChairType> {
    const res = await this.client.post<ChairType>('/chairs', formData);
    if (res.status === 201) {
      return res.data;
    }
    return Promise.reject(new Error('неверный статус код стульев'));
  }
}

const chairService = new ChairService(axiosClient);

export default chairService;
