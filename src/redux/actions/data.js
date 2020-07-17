import { initialActiveBases, initialActiveSizes } from './pizzas-list';
import { initPizzas, pizzasSort } from './filters';

const dataRequested = () => {
  return {
    type: 'FETCH_DATA_REQUESTED',
  };
};

const dataLoaded = (newPizzas) => {
  return {
    type: 'FETCH_DATA_LOADED',
    payload: newPizzas,
  };
};

const dataError = (error) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error,
  };
};

export const fetchData = (dispatch) => (pizzaStoreService) => {
  dispatch(dataRequested());

  pizzaStoreService
    .getData()
    .then((data) => {
      // ??????????
      dispatch(initialActiveBases(data));
      dispatch(initialActiveSizes(data));
      dispatch(initPizzas(data.pizzas));
      dispatch(pizzasSort());
      dispatch(dataLoaded(data));
    })
    .catch((err) => dispatch(dataError(err)));
};
