import React, { useEffect } from 'react';
import { Pizza } from '../../components';

import { connect } from 'react-redux';
import {
  pizzaAddedToCart,
  setActiveSize,
  setActiveBase,
  // initPizzas,
  // pizzasSort,
  // initialActiveBases,
  // initialActiveSizes,
} from '../../redux/actions';

const PizzasList = ({
  items,
  activeBases,
  activeSizes,
  cartItems,
  pizzaAddedToCart,
  onBaseClick,
  onSizeClick,
  // initPizzas,
  // pizzasSort,
  // initialActiveBases,
  // initialActiveSizes,
}) => {
  // useEffect(() => {
  //   initialActiveBases(items);
  //   initialActiveSizes(items);
  //   initPizzas(items);
  //   pizzasSort();
  // }, []);

  const pizzasList = items.map((pizza) => {
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

  return <div className='content__pizza-list'>{pizzasList}</div>;
};

const mapStateToProps = ({
  filters: { sortedAndFiltredPizzas },
  pizzasList: { activeBases, activeSizes },
  cart: { cartItems },
}) => {
  return {
    activeBases,
    activeSizes,
    cartItems,
    items: sortedAndFiltredPizzas,
  };
};

const mapDispatchToProps = {
  pizzaAddedToCart,
  onBaseClick: setActiveBase,
  onSizeClick: setActiveSize,
  // initPizzas,
  // pizzasSort,
  // initialActiveBases,
  // initialActiveSizes,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzasList);
