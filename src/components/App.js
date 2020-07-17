import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';
import { Home, Cart } from '../pages';
import { Header, NotFound, CartEmpty } from './';
import { Spinner, ErrorIndicator, pizzaStoreContext } from '../components';
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions';

// TODO
// Redux
//

// 3 перевести redux на hooks

// 3 подумать как лучше сделать фильтр и сортировку
// 4 подумать где и как лучше хранить категории для фильтра и сортировки

// APP
// 2 Подумать как лучше разместить img, fonts, scss

const App = ({ loading, error, fetchData }) => {
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
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/cart' component={Cart} />
          <Route path='/empty-cart' component={CartEmpty} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = ({ data: { loading, error } }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: fetchData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
