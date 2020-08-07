import React from 'react';
import { Link } from 'react-router-dom';

const EditPizza = () => {
  return (
    <div class='edit-pizza page'>
      <div class='container edit-pizza__container'>
        <h2 class='edit-pizza__title'>Редактирование пиццы</h2>
        <form action='' class='pizza-form'>
          <label htmlFor='' class='pizza-form__label'>
            Ссылка на картинку
          </label>
          <input type='text' class='pizza-form__input input' />
          <label htmlFor='' class='pizza-form__label'>
            Название
          </label>
          <input type='text' class='pizza-form__input input' />
          <label htmlFor='' class='pizza-form__label'>
            Цена
          </label>
          <input type='text' class='pizza-form__input input' />

          <label htmlFor='' class='pizza-form__label'>
            Категория
          </label>
          {/* <!-- <input type="text" class="pizza-form__input input" /> --> */}

          <div class='pizza-form__select-wrap'>
            <select class='select' name='filters'>
              <option value='Все'> Все </option>
              <option value='Мясные'> Мясные </option>
              <option value='Вегатарианские'> Вегатарианские </option>
              <option value='Гриль'> Гриль </option>
              <option value='Острые'> Острые </option>
            </select>
          </div>

          <label htmlFor='' class='pizza-form__label'>
            Рейтинг
          </label>
          <input type='text' class='pizza-form__input input' />

          <fieldset class='pizza-form__bases'>
            <legend class='pizza-form__legend'>Доступные основы:</legend>
            <input
              class='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='тонкое'
              id='base-thin'
            />
            <label htmlFor='base-thin' class='pizza-form__ch-b-label'>
              Тонкое
            </label>
            <input
              class='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='Традиционное'
              id='base-traditional'
            />
            <label htmlFor='base-traditional' class='pizza-form__ch-b-label'>
              Традиционное
            </label>
          </fieldset>

          <fieldset class='pizza-form__sizes'>
            <legend class='pizza-form__legend'>Доступные размеры:</legend>
            <input
              class='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='26 см.'
              id='size-26'
            />
            <label htmlFor='size-26' class='pizza-form__ch-b-label'>
              26 см.
            </label>
            <input
              class='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='30 см.'
              id='size-30'
            />
            <label htmlFor='size-30' class='pizza-form__ch-b-label'>
              30 см.
            </label>
            <input
              class='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='40 см.'
              id='size-40'
            />
            <label htmlFor='size-40' class='pizza-form__ch-b-label'>
              40 см.
            </label>
          </fieldset>

          <div class='pizza-form__btns'>
            <Link to='/' class='button button_grey pizza-form__cansel-btn'>
              Отмена
            </Link>
            <Link to='/' class='button button_grey pizza-form__save-btn'>
              Сохранить
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPizza;
