export const pizzaAddedToCart = (pizzaId, activeBase, activeSize) => {
  return {
    type: 'PIZZA_ADDED_TO_CART',
    payload: { pizzaId, activeBase, activeSize },
  };
};

export const pizzaRemovedFromCart = (cartId) => {
  return {
    type: 'PIZZA_REMOVED_FROM_CART',
    payload: cartId,
  };
};

export const allPizzasRemovedFromCart = () => {
  return {
    type: 'ALL_PIZZAS_REMOVED_FROM_CART',
  };
};

export const pizzaIncrease = (cartId) => {
  return {
    type: 'PIZZA_INCREASE',
    payload: cartId,
  };
};

export const pizzaDecrease = (cartId) => {
  return {
    type: 'PIZZA_DECREASE',
    payload: cartId,
  };
};
