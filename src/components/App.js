import React from 'react';
import { Home, Cart } from '../pages';
import { Header, NotFound, CartEmpty } from './';

import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';

// TODO
// Redux
// 2 доделать что бы вся логика просто работала

// 3 подумать как лучше сделать фильтр и сортировку
// 4 подумать где и как лучше хранить категории для фильтра и сортировки

// APP
// 2 Подумать как лучше разместить img, fonts, scss 



const App = () => { 
  return (
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route path='/' render={() => <Home />} exact />
          <Route path='/cart' render={() => <Cart />} />
          <Route path='/empty-cart' component={CartEmpty} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
