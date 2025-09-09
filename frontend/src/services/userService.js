import api from './api';

const USERS_ENDPOINT = '/users';

export const userService = {
  // Get all users
  getAll: async () => {
    const response = await api.get(USERS_ENDPOINT);
    return response.data;
  },

  // Get single user by ID
  getById: async (id) => {
    const response = await api.get(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  },

  // Create new user
  create: async (userData) => {
    const response = await api.post(USERS_ENDPOINT, userData);
    return response.data;
  },

  // Update existing user
  update: async (id, userData) => {
    const response = await api.put(`${USERS_ENDPOINT}/${id}`, userData);
    return response.data;
  },

  // Delete user
  delete: async (id) => {
    const response = await api.delete(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  }
};

export default userService;
