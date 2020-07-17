import cartReducer from './cart';
import filtersReducer from './filters';
import dataReducer from './data';
import pizzasListReducer from './pizzas-list';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  data: dataReducer,
  pizzasList: pizzasListReducer,
});

export default rootReducer;
