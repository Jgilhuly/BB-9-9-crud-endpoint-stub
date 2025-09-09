import api from './api';

const PRODUCTS_ENDPOINT = '/products';

export const productService = {
  // Get all products
  getAll: async () => {
    const response = await api.get(PRODUCTS_ENDPOINT);
    return response.data;
  },

  // Get single product by ID
  getById: async (id) => {
    const response = await api.get(`${PRODUCTS_ENDPOINT}/${id}`);
    return response.data;
  },

  // Create new product
  create: async (productData) => {
    const response = await api.post(PRODUCTS_ENDPOINT, productData);
    return response.data;
  },

  // Update existing product
  update: async (id, productData) => {
    const response = await api.put(`${PRODUCTS_ENDPOINT}/${id}`, productData);
    return response.data;
  },

  // Delete product
  delete: async (id) => {
    const response = await api.delete(`${PRODUCTS_ENDPOINT}/${id}`);
    return response.data;
  }
};

export default productService;
