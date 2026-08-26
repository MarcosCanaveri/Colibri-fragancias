export const ROLES = Object.freeze({
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  STORE: 'store'
});

export const PRODUCT_STATUS = Object.freeze({
  AVAILABLE: 'AVAILABLE',
  OUT_OF_STOCK: 'OUT_OF_STOCK'
});

export const ORDER_STATUS = Object.freeze({
  CREATED: 'created',
  PENDING: 'pending',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
});

export const ORDER_PRIORITY = Object.freeze({
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
});
