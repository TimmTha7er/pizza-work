import { initPizzas } from './categories';

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

export const fetchPizzas = (dispatch, pizzaStoreService) => () => {
  dispatch(pizzasRequested());

  pizzaStoreService
    .getPizzas()
    .then((data) => {
      dispatch(initPizzas(data.pizzas)); // уберем, когда подключим БД
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
