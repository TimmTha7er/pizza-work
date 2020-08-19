import React from 'react';
import { Link } from 'react-router-dom';

const AddPizza = () => {
  return (
    <div className='edit-pizza page'>
      <div className='container edit-pizza__container'>
        <h2 className='edit-pizza__title'>Редактирование пиццы</h2>
        <form action='' className='pizza-form'>
          <label htmlFor='' className='pizza-form__label'>
            Ссылка на картинку
          </label>
          <input type='text' className='pizza-form__input input' />
          <label htmlFor='' className='pizza-form__label'>
            Название
          </label>
          <input type='text' className='pizza-form__input input' />
          <label htmlFor='' className='pizza-form__label'>
            Цена
          </label>
          <input type='text' className='pizza-form__input input' />

          <label htmlFor='' className='pizza-form__label'>
            Категория
          </label>
          {/* <!-- <input type="text" className="pizza-form__input input" /> --> */}

          <div className='pizza-form__select-wrap'>
            <select className='select' name='filters'>
              <option value='Все'> Все </option>
              <option value='Мясные'> Мясные </option>
              <option value='Вегатарианские'> Вегатарианские </option>
              <option value='Гриль'> Гриль </option>
              <option value='Острые'> Острые </option>
            </select>
          </div>

          <label htmlFor='' className='pizza-form__label'>
            Рейтинг
          </label>
          <input type='text' className='pizza-form__input input' />

          <fieldset className='pizza-form__bases'>
            <legend className='pizza-form__legend'>Доступные основы:</legend>
            <input
              className='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='тонкое'
              id='base-thin'
            />
            <label htmlFor='base-thin' className='pizza-form__ch-b-label'>
              Тонкое
            </label>
            <input
              className='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='Традиционное'
              id='base-traditional'
            />
            <label
              htmlFor='base-traditional'
              className='pizza-form__ch-b-label'
            >
              Традиционное
            </label>
          </fieldset>

          <fieldset className='pizza-form__sizes'>
            <legend className='pizza-form__legend'>Доступные размеры:</legend>
            <input
              className='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='26 см.'
              id='size-26'
            />
            <label htmlFor='size-26' className='pizza-form__ch-b-label'>
              26 см.
            </label>
            <input
              className='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='30 см.'
              id='size-30'
            />
            <label htmlFor='size-30' className='pizza-form__ch-b-label'>
              30 см.
            </label>
            <input
              className='pizza-form__checkbox visually-hidden'
              type='checkbox'
              name='40 см.'
              id='size-40'
            />
            <label htmlFor='size-40' className='pizza-form__ch-b-label'>
              40 см.
            </label>
          </fieldset>

          <div className='pizza-form__btns'>
            <Link to='/' className='button button_grey pizza-form__cansel-btn'>
              Отмена
            </Link>
            <Link to='/' className='button button_grey pizza-form__save-btn'>
              Сохранить
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPizza;
