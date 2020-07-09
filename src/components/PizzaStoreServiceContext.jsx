import React from 'react';

const pizzaStoreContext = React.createContext();

const {
  Provider: PizzaStoreServiceProvider,
  Consumer: PizzaStoreServiceConsumer
} = pizzaStoreContext;

export {
	pizzaStoreContext,
  PizzaStoreServiceProvider,
  PizzaStoreServiceConsumer
};
