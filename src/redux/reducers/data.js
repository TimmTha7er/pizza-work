
const initialState = {
  data: {
    pizzas: [],
    filterCategories: [],
    sortCategories: [],
  },
  loading: true,
  error: null,
};

const dataReducer = (state = initialState, action, fullState) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUESTED':
      return {
        ...initialState
      };

    case 'FETCH_DATA_LOADED':
      const { pizzas, filterCategories, sortCategories } = action.payload;

      return {
        ...state,
        data: {
          pizzas: pizzas,
          filterCategories: filterCategories,
          sortCategories: sortCategories,
        },
        loading: false,
        error: null,
      };

    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        data: {
          pizzas: [],
          filterCategories: [],
          sortCategories: [],
        },
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
