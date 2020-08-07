import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';
import { Home, Cart, Auth } from '../pages';
import {
  Header,
  Footer,
  NotFound,
  CartEmpty,
  EditPizza,
  EditFilters,
  Login,
  Ordering,
  Profile
} from './';

// TODO
// 1
// продолжить https://www.youtube.com/watch?v=iI5h4-pChho&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=5

// 2 Написать reducer и actions для редактирования пицц
// 3 Написать reducer и actions для редактирования фильта и сорттировки
// 6 Соединить все это с бэкэндом

// 7 Разобраться с логином и регистрацией на бэкэнде
// 8 Разобраться с редюсером и экшенами для регистрации и логина
// 9 Соединить все это

// 11 добавить обработку ошибок
// 12 сверстать NotFound, Spinner

// ?? возможно после всего подключить кассу
// хорошее видео по внедрению платежей на сайт
// https://www.youtube.com/watch?v=AfypOVaB5r0
// или с помощью robokassa
// или с помощью https://stripe.com/docs/stripe-js/react

const App = () => {
  const isAuth = true;
  let adminContent = null;

  if (isAuth) {
    adminContent = <Route path='/edit-pizza' component={EditPizza} />;
  }

  return (
    <div className='main-wrapper'>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/auth' component={Auth} />
          <Route path='/cart' component={Cart} />
          <Route path='/empty-cart' component={CartEmpty} />
          {adminContent}
          <Route component={NotFound} />
        </Switch>
      </main>

      <EditFilters />
      <Login />
      <Ordering />
      <EditPizza />
      <Profile />

      <Footer />
    </div>
  );
};

export default App;
