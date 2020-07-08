import React from 'react';
import { Categories, Sort, PizzasList } from '../components';

const Home = ({
  cartPizzasList,
  homePizzasList,
  handlePlusPizza,
  handleSortPizza,
  handleFilterPizza
}) => {
  console.log('cart', cartPizzasList);

  return (
    <section className='content'>
      <div className='content__top-line'>
        <Categories handleFilterPizza={handleFilterPizza} />
        <Sort handleSortPizza={handleSortPizza} />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <PizzasList
          cartPizzasList={cartPizzasList}
          homePizzasList={homePizzasList}
          handlePlusPizza={handlePlusPizza}
        />
      </div>
    </section>
  );
};

export default Home;
