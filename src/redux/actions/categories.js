const categoriesRequested = () => {
  return {
    type: 'FETCH_CATEGORIES_REQUESTED',
  };
};

const categoriesLoaded = (categories) => {
  return {
    type: 'FETCH_CATEGORIES_LOADED',
    payload: categories,
  };
};

const categoriesError = (error) => {
  return {
    type: 'FETCH_CATEGORIES_ERROR',
    payload: error,
  };
};

export const fetchCategories = (dispatch, pizzaStoreService) => () => {
  dispatch(categoriesRequested());

  pizzaStoreService
    .getCategories()
    .then((data) => {
      dispatch(categoriesLoaded(data));
    })
    .catch((err) => dispatch(categoriesError(err)));
};

export const pizzasSort = (category) => {
  return {
    type: 'PIZZA_SORT',
    payload: { category },
  };
};

export const pizzasFilter = (filter, pizzas) => {
  return {
    type: 'PIZZA_FILTER',
    payload: { filter, pizzas },
  };
};

// удалим, когда подключим БД
export const initPizzas = (pizzas) => {
  return {
    type: 'INIT_PIZZAS',
    payload: pizzas,
  };
};
