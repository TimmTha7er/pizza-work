import cartReducer from './cart';
import filtersReducer from './filters';
import dataReducer from './data';
import pizzasListReducer from './pizzas-list';


const rootReducer = (state = {}, action) => {
  console.log('main state', state)
  return {
    cart: cartReducer(state.cart, action, state),
    filters: filtersReducer(state.filters , action, state),
    data: dataReducer(state.data, action, state),
    pizzasList: pizzasListReducer(state.pizzasList, action, state),
  };
};

export default rootReducer;
