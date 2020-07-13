export const dataRequested = () => {
  return {
    type: 'FETCH_DATA_REQUESTED',
  };
};

export const dataLoaded = (newPizzas) => {
  return {
    type: 'FETCH_DATA_LOADED',
    payload: newPizzas,
  };
};

export const dataError = (error) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error,
  };
};

// ????????????????
export const fetchData = (pizzaStoreService, dispatch) => () => {
  console.log('pizzaStoreService', pizzaStoreService);
  console.log('dispatch', dispatch);
  dispatch(dataRequested());

  pizzaStoreService
    .getData()
    .then((data) => dispatch(dataLoaded(data)))
    .catch((err) => dispatch(dataError(err)));
};
