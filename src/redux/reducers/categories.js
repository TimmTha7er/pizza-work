const sortByRating = (pizzas) => {
  return [...pizzas].sort((a, b) => b.rating - a.rating);
};

const sortByPrice = (pizzas) => {
  return [...pizzas].sort((a, b) => b.price - a.price);
};

const sortByAlphabet = (pizzas) => {
  return [...pizzas].sort((a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();

    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};

const sortByCategory = (category, pizzas) => {
  switch (category) {
    case 'популярности':
      return sortByRating(pizzas);

    case 'цене':
      return sortByPrice(pizzas);

    case 'алфавиту':
      return sortByAlphabet(pizzas);

    default:
      return sortByRating(pizzas);
  }
};

const initialState = {
  filterCategories: [],
  sortCategories: [],
  filter: 0,
  sortBy: 'популярности',
  sortedAndFiltredPizzas: [],
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

  if (action.type === 'INIT_PIZZAS') {
    const pizzas = action.payload;
    const sortedPizzas = sortByCategory(state.sortBy, pizzas);

    return {
      ...state,
      sortedAndFiltredPizzas: sortedPizzas,
    };
  }

  if (action.type === 'PIZZA_SORT') {
    const { category = 'популярности' } = action.payload;
    const sortedPizzas = sortByCategory(category, state.sortedAndFiltredPizzas);

    return {
      ...state,
      sortedAndFiltredPizzas: sortedPizzas,
      sortBy: category,
    };
  }

  if (action.type === 'PIZZA_FILTER') {
    const { filter, pizzas } = action.payload;
    const sortedPizzas = sortByCategory(state.sortBy, pizzas);
    let filteredPizzas;

    if (filter === 0) {
      filteredPizzas = sortedPizzas;
    } else {
      filteredPizzas = sortedPizzas.filter(
        (pizza) => pizza.category === filter
      );
    }

    return {
      ...state,
      filter: filter,
      sortedAndFiltredPizzas: filteredPizzas,
    };
  }

  return state;
};

export default categoriesReducer;
