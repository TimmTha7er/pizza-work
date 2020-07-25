const setActive = (items, pizzaId, index, name) => {
  // находим индекс элемента
  const idx = items.findIndex((el) => el.pizzaId === pizzaId);
  const oldItem = items[idx];
  // new item
  const newItem = { ...oldItem, [name]: index };

  // создаем новый массив, удаляя ненужный элемент
  const newItems = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];

  return newItems;
};

const initialState = {
  pizzas: [],
  activeBases: [],
  activeSizes: [],
  loading: true,
  error: null,
};

const pizzasListReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_PIZZAS_REQUESTED') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'FETCH_PIZZAS_LOADED') {
    const { pizzas, activeBases, activeSizes } = action.payload;

    return {
      ...state,
      pizzas,
      activeBases,
      activeSizes,
      loading: false,
      error: null,
    };
  }

  if (action.type === 'FETCH_PIZZAS_ERROR') {
    return {
      ...state,
      pizzas: [],
      activeBases: [],
      activeSizes: [],
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === 'SET_ACTIVE_SIZE') {
    const { pizzaId, index } = action.payload;
    const newSizes = setActive(state.activeSizes, pizzaId, index, 'activeSize');

    return {
      ...state,
      activeSizes: newSizes,
    };
  }

  if (action.type === 'SET_ACTIVE_BASE') {
    const { pizzaId, index } = action.payload;
    const newBases = setActive(state.activeBases, pizzaId, index, 'activeBase');

    return {
      ...state,
      activeBases: newBases,
    };
  }

  return state;
};

export default pizzasListReducer;
