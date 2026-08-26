import { usersRepository } from '../repositories/users.repository.js';

import { ROLES } from '../constants/index.js';

export const usersService = {
  getUsers: async () => {
    return usersRepository.findAll();
  },

  getUserById: async (id) => {
    const user = await usersRepository.findById(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return user;
  },

  createUser: async (userData) => {
    const { firstName, lastName, email, password, role } = userData;

    
    const finalRole = Object.values(ROLES).includes(role) ? role : ROLES.CUSTOMER;

    const user = await usersRepository.create({ 
      firstName, 
      lastName, 
      email, 
      password, 
      role: finalRole 
    });
    return user;
  },

  updateUser: async (id, userData) => {
    const user = await usersRepository.update(id, userData);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return user;
  },

  deleteUser: async (id) => {
    const user = await usersRepository.delete(id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    return user;
  }
};


export default usersService;
