export const pizzasSort = (category) => {
  return {
    type: 'PIZZA_SORT',
    payload: { category },
  };
};

export const pizzasFilter = (filter, pizzas ) => {
  return {
    type: 'PIZZA_FILTER',
    payload: { filter, pizzas },
  };
};

export const initPizzas = (pizzas) => {
  return {
    type: 'INIT_PIZZAS',
    payload: pizzas,
  };
};
