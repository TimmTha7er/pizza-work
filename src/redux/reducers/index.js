import { combineReducers } from 'redux';

import cartReducer from './cart';
import filtersReducer from './filters';
import pizzasListReducer from './pizzas-list';

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  pizzasList: pizzasListReducer,
});

export default rootReducer;
