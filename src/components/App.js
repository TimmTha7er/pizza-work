import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/index.scss';
import { Home, Cart } from '../pages';
import { Header, NotFound, CartEmpty } from './';

// TODO
// продолжить https://youtu.be/Ix9iV72GMKg?t=7342
// 1
// сортировку и фильтр нужно делать на сервере т.е. наше приложение
// должно просто говорить какие данные оно хочет получить
// сервер должен делать все сложные манипуляции с данными и
// возвращать их
// ответ на мой вопрос в начале видео
// https://www.youtube.com/watch?v=IZVNNc8FHYg
// Значит решиться проблема в редюсерами для сортировка и
// не нужно будет дополнительный массив делать


// 5
// создать сервак на Node.js
// в этом видео все есть https://www.youtube.com/watch?v=ivDjWYcKDZI
// так же есть на компе у code dojo есть CRUD пример с туду
//  и что-то есть в моих записях Evernote

// Когда будет сервак
// Сверстать форму логина для сайта
// 1 сделать логин(jwt токен и т.д. как в видео)
// 2 Создать БД(mongoDB)
// 3 подключить mongoDB
// 4 Сделать сортировку с помощью БД

// 5 Добавить формы для категорий фильтра и сортировки и пицц
// 6 сделать добавление удаление редактирование пицц, фильров и сортировок

// 7 добавить обработку ошибок
// 8 сверстать NotFound, Spinner

const App = () => {
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

export default App;
