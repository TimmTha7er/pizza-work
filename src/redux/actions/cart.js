export const pizzaAddedToCart = (pizzaId) => {
  return {
    type: 'PIZZA_ADDED_TO_CART',
    payload: pizzaId,
  };
};

export const pizzaRemovedFromCart = (pizzaId) => {
  return {
    type: 'PIZZA_REMOVED_FROM_CART',
    payload: pizzaId,
  };
};

export const allPizzasRemovedFromCart = () => {
  return {
    type: 'ALL_PIZZAS_REMOVED_FROM_CART',
  };
};