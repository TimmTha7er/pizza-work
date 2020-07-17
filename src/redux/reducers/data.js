const initialState = {
  pizzas: [],
  filterCategories: [],
  sortCategories: [],
  loading: true,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_DATA_REQUESTED') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'FETCH_DATA_LOADED') {
    const { pizzas, filterCategories, sortCategories } = action.payload;

    return {
      ...state,
      pizzas: pizzas,
      filterCategories: filterCategories,
      sortCategories: sortCategories,
      loading: false,
      error: null,
    };
  }
  
  if (action.type === 'FETCH_DATA_ERROR') {
    return {
      ...state,
      pizzas: [],
      filterCategories: [],
      sortCategories: [],
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export default dataReducer;
