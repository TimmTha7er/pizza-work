const pizzasLoaded = (newPizzas) => {
  return {
    type: 'PIZZAS_LOADED',
    payload: newPizzas,
  };
};

const pizzasRequested = () => {
  return {
    type: 'PIZZAS_REQUESTED',
  };
};

const pizzasError = (error) => {
  return {
    type: 'PIZZAS_ERROR',
    payload: error,
  };
};

const pizzasSort = (category) => {
  return {
    type: 'PIZZA_SORT',
    payload: category
  }
}

const pizzasFilter = (category) => {
  return {
    type: 'PIZZA_FILTER',
    payload: category
  }
}

const pizzaAddedToCart = (pizzaId) => {
  // console.log(pizzaId)
  return {
    type: 'PIZZA_ADDED_TO_CART',
    payload: pizzaId,
  };
};

const pizzaRemovedFromCart = (pizzaId) => {
  return {
    type: 'PIZZA_REMOVED_FROM_CART',
    payload: pizzaId,
  };
};

const allPizzasRemovedFromCart = () => {
  return {
    type: 'ALL_PIZZAS_REMOVED_FROM_CART',
  };
};

export {
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  pizzasSort,
  pizzasFilter,
  pizzaAddedToCart,
  pizzaRemovedFromCart,
  allPizzasRemovedFromCart
};
