import React, { useEffect, useContext } from 'react';
import { Pizza, Spinner, ErrorIndicator, pizzaStoreContext } from '../../components';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  pizzaAddedToCart,
} from '../../redux/actions';

const PizzasList = ({
  pizzas,
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  loading,
  error,
  // filter,
  // cartItems,
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

  console.log(pizzas)

  const pizzasList = pizzas.map((pizza) => {
    // const count = cartItems.reduce((prev, cur) => {
    //   return cur.pizzaId === pizza.id ? prev + cur.count : prev;
    // }, 0);
    // if (filter === 0 || pizza.category === filter) {
      return (
        <Pizza
          key={pizza.id}
          pizza={pizza}
          // count={count}
          pizzaAddedToCart={pizzaAddedToCart}
        />
      );
    // }
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  // console.log(pizzasList);

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

const mapStateToProps = ({pizzasList: {pizzas, loading, error}}) => {
  // console.log('state', pizzasList)
  return {
    pizzas: pizzas,
    loading: loading,
    error: error,
    // cartItems: state.cartItems,
    // filter: pizzasList.filter,
  };
};

const mapDispatchToProps = {
  pizzasLoaded,
  pizzasRequested,
  pizzasError,
  pizzaAddedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzasList);
