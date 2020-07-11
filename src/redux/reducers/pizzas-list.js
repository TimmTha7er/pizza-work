const initialState = {
  pizzas: [],
  loading: true,
  error: null,

  activeBases: [],
  activeSizes: [],
};

const findActiveElement = (elements) => {
  return elements.findIndex((el) => {
    return el.available === true;
  });
};

const pizzasListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS_REQUESTED':
      return {
        ...state,
        pizzas: [],
        loading: true,
        error: null,
      };

    case 'PIZZAS_LOADED':
      const pizzas = action.payload;

      const activeBases = pizzas.map((pizza) => {
        return {
          pizzaId: pizza.id,
          activeBase: findActiveElement(pizza.bases),
        };
      });

      const activeSizes = pizzas.map((pizza) => {
        return {
          pizzaId: pizza.id,
          activeSize: findActiveElement(pizza.sizes),
        };
      });

      console.log(activeBases);
      console.log(activeSizes);

      return {
        ...state,
        pizzas: action.payload,
        activeBases: activeBases,
        activeSizes: activeSizes,
        loading: false,
        error: null,
      };

    case 'PIZZAS_ERROR':
      return {
        ...state,
        pizzas: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default pizzasListReducer;
