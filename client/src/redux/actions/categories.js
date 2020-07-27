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

export const setSortCategory = (category) => {
  return {
    type: 'SET_SORT_CATEGORY',
    payload: category,
  };
};

export const setFilterCategory = (filter) => {
  return {
    type: 'SET_FILTER_CATEGORY',
    payload: filter,
  };
};

export const setSortOrder = (order) => {
  return {
    type: 'SET_SORT_ORDER',
    payload: order,
  };
};
