import React, { useEffect, useContext } from 'react';
import {
  Sort,
  PizzasList,
  Filters,
  Spinner,
  ErrorIndicator,
  pizzaStoreContext,
} from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  dataLoaded,
  dataRequested,
  dataError,
  initialActiveBases,
  initialActiveSizes,
  fetchData,
} from '../redux/actions';

const Home = ({
  pizzas,
  filterCategories,
  sortCategories,
  loading,
  error,
  fetchData,
}) => {
  const pizzaStoreService = useContext(pizzaStoreContext);

  useEffect(() => {
    fetchData(pizzaStoreService);
  }, []); //

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <section className='content'>
      <div className='content__top-line'>
        <Filters filterCategories={filterCategories} />
        <Sort sortCategories={sortCategories} />
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <PizzasList pizzas={pizzas} />
      </div>
    </section>
  );
};

const mapStateToProps = ({
  data: {
    data: { pizzas, filterCategories, sortCategories },
    loading,
    error,
  },
}) => {
  // console.log(pizzas);
  return {
    pizzas,
    filterCategories,
    sortCategories,
    loading,
    error,
  };
};

// const mapDispatchToProps = {
//   dataLoaded,
//   dataRequested,
//   dataError,
//   fetchData,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (pizzaStoreService) => {
      dispatch(dataRequested());

      pizzaStoreService
        .getData()
        .then((data) => {
          dispatch(initialActiveBases(data));
          dispatch(initialActiveSizes(data));
          dispatch(dataLoaded(data));
        })
        // .then(() => dispatch(initialActiveBases()))
        // .then(() => dispatch(initialActiveSizes()))
        .catch((err) => dispatch(dataError(err)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
