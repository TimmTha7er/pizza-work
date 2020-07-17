const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

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
  activeBases: [],
  activeSizes: [],
};

const pizzasListReducer = (state = initialState, action) => {
  if (action.type === 'INITIAL_ACTIVE_BASES') {
    const { pizzas } = action.payload;

    const activeBases = pizzas.map((pizza) => {
      return {
        pizzaId: pizza.id,
        activeBase: findActiveElement(pizza.bases),
      };
    });

    return {
      ...state,
      activeBases: activeBases,
    };
  }

  if (action.type === 'INITIAL_ACTIVE_SIZES') {
    const { pizzas } = action.payload;
    
    const activeSizes = pizzas.map((pizza) => {
      return {
        pizzaId: pizza.id,
        activeSize: findActiveElement(pizza.sizes),
      };
    });

    return {
      ...state,
      activeSizes: activeSizes,
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
