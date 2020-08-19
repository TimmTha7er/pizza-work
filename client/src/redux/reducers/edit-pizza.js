const initialState = {
  pizza: null,
  loading: true,
  error: null,
};

const pizzasListReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_PIZZA_REQUESTED') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'FETCH_PIZZA_LOADED') {
    const pizza = action.payload;

    return {
      ...state,
      pizza,
      loading: false,
      error: null,
    };
  }

  if (action.type === 'FETCH_PIZZA_ERROR') {
		const error = action.payload;
    return {
      ...state,
      error,
      pizza: null,
      loading: false,
    };
  }

  return state;
};

export default pizzasListReducer;