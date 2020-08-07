import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div class='profile page'>
      <div class='container profile__container'>
        <h2 class='profile__title'>Личный кабинет</h2>
        <form class='profile-form' action=''>
          <label class='profile-form__label' for=''>
            Имя
          </label>
          <input
            class='profile-form__input input'
            type='text'
            placeholder='Введите имя'
          />
          <label class='profile-form__label' for=''>
            Номер телефона
          </label>
          <input
            class='profile-form__input input'
            type='text'
            placeholder='Введите номер телефона'
          />
          <label class='profile-form__label' for=''>
            Email
          </label>
          <input
            class='profile-form__input input'
            type='text'
            placeholder='Введите Email'
          />
          <label class='profile-form__label' for=''>
            Адрес
          </label>
          <textarea
            class='profile-form__textarea input'
            placeholder='Введите ваш адрес'
          ></textarea>

          <div class='profile-form__btns'>
            <Link to='/' class='button button_grey profile-form__btn'>
              Выйти
            </Link>
            <Link to='/' class='button button_grey profile-form__btn'>
              Сохранить
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
