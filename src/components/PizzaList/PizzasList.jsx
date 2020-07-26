import React, { useEffect } from 'react';
import { Pizza, ErrorIndicator, PizzaLoader } from '../../components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  pizzaAddedToCart,
  setActiveSize,
  setActiveBase,
  fetchPizzas,
} from '../../redux/actions';

const PizzasList = ({
  items,
  activeBases,
  activeSizes,
  cartItems,
  pizzaAddedToCart,
  onBaseClick,
  onSizeClick,
  loading,
  error,
  fetchPizzas,
  filter,
  sortBy,
  order,
}) => {
  useEffect(() => {
    fetchPizzas(filter, sortBy, order);
  }, [filter, sortBy, order]);

  if (error) {
    return <ErrorIndicator />;
  }

  let pizzasList;

  if (loading) {
    pizzasList = Array(12)
      .fill(0)
      .map((_, index) => <PizzaLoader key={index} />);
  } else {
    pizzasList = items.map((pizza) => {
      const activeBase = activeBases.find((el) => el.pizzaId === pizza.id);
      const activeSize = activeSizes.find((el) => el.pizzaId === pizza.id);
      const count = cartItems.reduce((count, cur) => {
        return cur.pizzaId === pizza.id ? count + cur.count : count;
      }, 0);

      return (
        <Pizza
          key={pizza.id}
          pizza={pizza}
          {...{
            activeBase,
            activeSize,
            onBaseClick,
            onSizeClick,
            count,
            pizzaAddedToCart,
          }}
        />
      );
    });
  }

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

const mapStateToProps = ({
  categories: { filter, sortBy, order, filterCategories },
  pizzasList: { pizzas, activeBases, activeSizes, loading, error },
  cart: { cartItems },
}) => {
  const title = filterCategories[filter] && filterCategories[filter].name;

  return {
    activeBases,
    activeSizes,
    cartItems,
    items: pizzas,
    loading,
    error,
    title,
    sortBy,
    order,
    filter,
  };
};

const mapDispatchToProps = (dispatch, { pizzaStoreService }) => {
  return {
    ...bindActionCreators(
      {
        pizzaAddedToCart: pizzaAddedToCart,
        onBaseClick: setActiveBase,
        onSizeClick: setActiveSize,
      },
      dispatch
    ),
    fetchPizzas: fetchPizzas(dispatch, pizzaStoreService),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzasList);
