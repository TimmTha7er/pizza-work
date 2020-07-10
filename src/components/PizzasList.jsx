import React, { useEffect, useContext } from 'react';
import { Pizza, Spinner, ErrorIndicator } from './';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  pizzaAddedToCart,
} from '../actions';
import { pizzaStoreContext } from './PizzaStoreServiceContext';

const PizzasList = ({
  pizzas,
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  loading,
  error,
  filter,
  cartItems,
  pizzaAddedToCart,
}) => {
  const pizzaStoreService = useContext(pizzaStoreContext);

  useEffect(() => {
    pizzasRequested();
    pizzaStoreService
      .getPizzas()
      .then((data) => pizzasLoaded(data.pizzas))
      .catch((error) => pizzasError(error));
  }, [pizzaStoreService, pizzasError, pizzasLoaded, pizzasRequested]); // ???? разобраться

  const pizzasList = pizzas.map((pizza) => {
    // const count = cartItems.reduce((prev, cur) => {
    //   return cur.pizzaId === pizza.id ? prev + cur.count : prev;
    // }, 0);
    if (filter === 0 || pizza.category === filter) {
      return (
        <Pizza
          key={pizza.id}
          pizza={pizza}
          // count={count}
          pizzaAddedToCart={pizzaAddedToCart}
        />
      );
    }
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    loading: state.loading,
    error: state.error,
    cartItems: state.cartItems,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  pizzaAddedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzasList);
