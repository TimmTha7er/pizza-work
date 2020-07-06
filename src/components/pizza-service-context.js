import React from 'react';

const pizzaContext = React.createContext();
const {
  Provider: PizzaServiceProvider,
  Consumer: PizzaServiceConsumer,
} = pizzaContext;

export { pizzaContext, PizzaServiceProvider, PizzaServiceConsumer };
