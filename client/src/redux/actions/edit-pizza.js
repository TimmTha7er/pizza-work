const pizzaRequested = () => {
  return {
    type: 'FETCH_PIZZA_REQUESTED',
  };
};

const pizzaLoaded = (newPizzas) => {
  return {
    type: 'FETCH_PIZZA_LOADED',
    payload: newPizzas,
  };
};

const pizzaError = (error) => {
  return {
    type: 'FETCH_PIZZA_ERROR',
    payload: error,
  };
};

export const fetchPizza = (dispatch) => (id, pizzaStoreService) => {
  dispatch(pizzaRequested());

  pizzaStoreService
    .getPizza(id)
    .then((data) => {
      dispatch(pizzaLoaded(data));
    })
    .catch((err) => dispatch(pizzaError(err)));
};
