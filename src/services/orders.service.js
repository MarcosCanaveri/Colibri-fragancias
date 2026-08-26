import { ordersRepository } from "../repositories/order.repository.js";

export const ordersService = {
    getOrders: async () => {
        return ordersRepository.findAll();
    },

    getOrderById: async (id) => {
        const order = await ordersRepository.findById(id);
        if (!order) {
            const error = new Error('Order not found');
            error.statusCode = 404;
            throw error;
        }
        return order;
    },

    createOrder: async (orderData) => {
        const { customer, store, items, deliveryAddress, priority } = orderData;

        if (!customer || !store || !items || !deliveryAddress) {
            const error = new Error('Missing required fields');
            error.statusCode = 400;
            throw error;
        }

        const userFound = await ordersRepository.findCustomerById(customer);

        if (!userFound) {
            const error = new Error('Customer not found');
            error.statusCode = 404;
            throw error;
        }
        

        const storeFound = await ordersRepository.findStoreById(store);
        if (!storeFound) {
            const error = new Error('Store not found');
            error.statusCode = 404;
            throw error;
        }

        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const newOrder = {
            ...orderData,
            total,
            status: 'created',
            priority:'normal',
        }
        return ordersRepository.create(newOrder);
    },

    updateOrderStatus: async (id, status) => {
        const order = await ordersRepository.updateStatus(id, status);
        if (!order) {
            const error = new Error('Order not found');
            error.statusCode = 404;
            throw error;
        }
        return order;
    },

    deleteOrder: async (id) => {
        const order = await ordersRepository.deleteOrder(id);
        if (!order) {
            const error = new Error('Order not found');
            error.statusCode = 404;
            throw error;
        }
        return order;
    }
};