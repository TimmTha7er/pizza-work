import cartReducer from './cart';
import categoriesReducer from './categories';
import pizzasListReducer from './pizzas-list';
import editPizzaReducer from './edit-pizza';
import authReducer from './auth';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  pizzasList: pizzasListReducer,
  editPizza: editPizzaReducer,
  auth: authReducer,
});

export default rootReducer;
