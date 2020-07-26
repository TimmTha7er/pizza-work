const initialState = {
  filterCategories: [],
  sortCategories: [],
  filter: 0,
  sortBy: 'популярности',
  order: 'asc',
  loading: true,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_CATEGORIES_REQUESTED') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'FETCH_CATEGORIES_LOADED') {
    const { filterCategories, sortCategories } = action.payload;

    return {
      ...state,
      filterCategories: filterCategories,
      sortCategories: sortCategories,
      loading: false,
      error: null,
    };
  }

  if (action.type === 'FETCH_CATEGORIES_ERROR') {
    return {
      ...state,
      filterCategories: [],
      sortCategories: [],
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === 'SET_SORT_CATEGORY') {
    const category = action.payload;

    return {
      ...state,
      sortBy: category,
    };
  }

  if (action.type === 'SET_FILTER_CATEGORY') {
    const filter = action.payload;

    return {
      ...state,
      filter: filter,
    };
  }

  if (action.type === 'SET_SORT_ORDER') {
    const order = action.payload;

    return {
      ...state,
      order: order,
    };
  }

  return state;
};

export default categoriesReducer;
