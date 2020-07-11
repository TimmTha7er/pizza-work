export const pizzasLoaded = (newPizzas) => {
  return {
    type: 'PIZZAS_LOADED',
    payload: newPizzas,
  };
};

export const pizzasRequested = () => {
  return {
    type: 'PIZZAS_REQUESTED',
  };
};

export const pizzasError = (error) => {
  return {
    type: 'PIZZAS_ERROR',
    payload: error,
  };
};