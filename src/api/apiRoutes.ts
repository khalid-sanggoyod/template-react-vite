import axios from '../utils/axios';

export const productRoutes = {
  fetchProducts: async (page: number, limit: number) => {
    return await axios.get(`/get-products?page=${page}&limit=${limit}`).then((r: any) => r.data);
  },
};
