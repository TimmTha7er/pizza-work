import cartReducer from './cart';
import categoriesReducer from './categories';
import pizzasListReducer from './pizzas-list';
import authReducer from './auth';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  pizzasList: pizzasListReducer,
  auth: authReducer,
});

export default rootReducer;
