import React, { useContext } from 'react';
import { Categories, PizzasList, pizzaStoreContext } from '../components';
import { connect } from 'react-redux';

const Home = ({ title }) => {
  const pizzaStoreService = useContext(pizzaStoreContext);

  return (
    <section className='content'>
      <Categories pizzaStoreService={pizzaStoreService} />
      <div className='content__body'>
        <h2 className='content__title'>{title} пиццы</h2>
        <PizzasList pizzaStoreService={pizzaStoreService} />
      </div>
    </section>
  );
};

const mapStateToProps = ({ categories: { filter, filterCategories } }) => {
  const title = filterCategories[filter] && filterCategories[filter].name;

  return {
    title,
  };
};

export default connect(mapStateToProps, null)(Home);
