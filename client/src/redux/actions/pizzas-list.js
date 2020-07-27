const pizzasRequested = () => {
  return {
    type: 'FETCH_PIZZAS_REQUESTED',
  };
};

const pizzasLoaded = (newPizzas) => {
  return {
    type: 'FETCH_PIZZAS_LOADED',
    payload: newPizzas,
  };
};

const pizzasError = (error) => {
  return {
    type: 'FETCH_PIZZAS_ERROR',
    payload: error,
  };
};

export const fetchPizzas = (dispatch, pizzaStoreService) => (
  filter,
  sortBy,
  order
) => {
  dispatch(pizzasRequested());

  pizzaStoreService
    .getPizzas(filter, sortBy, order)
    .then((data) => {
      dispatch(pizzasLoaded(data));
    })
    .catch((err) => dispatch(pizzasError(err)));
};

export const setActiveBase = (pizzaId, index) => {
  return {
    type: 'SET_ACTIVE_BASE',
    payload: { pizzaId, index },
  };
};

export const setActiveSize = (pizzaId, index) => {
  return {
    type: 'SET_ACTIVE_SIZE',
    payload: { pizzaId, index },
  };
};
