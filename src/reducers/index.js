const initialState = {
  pizzas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS_LOADED':
      return {
        pizzas: action.payload,
      };

    // case 'PIZZA_ADDED_TO_CART':
    //   break;
    // case 'PIZZA_REMOVED_FROM_CART':
    //   break;
    // case 'ALL_PIZZAS_REMOVED_FROM_CART':
    //   break;

    default:
      return state;
  }
};

export default reducer;
