import UserModel from '../models/user.model.js';

export const usersRepository = {
  findAll: async () => {
    return UserModel.find().lean();
  },
  
  findById: async (id) => {
    return UserModel.findById(id).lean();
  },
  
  create: async (userData) => {
    return UserModel.create(userData);
  },
  
  update: async (id, userData) => {
    return UserModel.findByIdAndUpdate(id, userData, { new: true }).lean();
  },
  
  delete: async (id) => {
    return UserModel.findByIdAndDelete(id).lean();
  }
};
