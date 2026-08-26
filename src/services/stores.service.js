import { storesRepository } from '../repositories/stores.repository.js';

export const storesService = {
  getStores: async () => {
    return storesRepository.findAll();
  },

  getStoreById: async (id) => {
    const store = await storesRepository.findById(id);
    if (!store) {
      const error = new Error('Store not found');
      error.statusCode = 404;
      throw error;
    }
    return store;
  },

  createStore: async (storeData) => {
    const { name, address, owner } = storeData;
    if (!name || !address || !owner) {
      const error = new Error('Missing required fields: name, address, and owner are required');
      error.statusCode = 400;
      throw error;
    }

    const user = await storesRepository.findOwnerById(owner);
    if (!user) {
      const error = new Error('Owner not found');
      error.statusCode = 404;
      throw error;
    }

    if (user.role !== "store") {
      const error = new Error('User is not authorized to be a store owner');
      error.statusCode = 403;
      throw error;
    }
    return storesRepository.create(storeData);
  },

  updateStore: async (id, updates) => {
    const store = await storesRepository.findById(id);
    if (!store) {
      const error = new Error('Store not found');
      error.statusCode = 404;
      throw error;
    }
    return store;
  },

  deleteStore: async (id) => {
    const store = await storesRepository.delete(id);
    if (!store) {
      const error = new Error('Store not found');
      error.statusCode = 404;
      throw error;
    }
    return store;
  }

};