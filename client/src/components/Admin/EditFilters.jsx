import React from 'react';

const EditFilters = () => {
  return (
    <div class='filters page'>
      <div class='container filters__container'>
        <h2 class='filters__title'>Фильтры</h2>
        <form class='filters-form' action=''>
          {/* <!-- <label class="filters-form__label" for="">Фильтры:</label> --> */}

          <ul class='filters-list'>
            <li class='filters-list__item'>
              <div class='filters-list__item-text'>Все</div>
              <div class='filters-list__btns-block'>
                <button class='filters-list__btn icon-pencil'></button>
                <button class='filters-list__btn icon-trash-empty'></button>
              </div>
            </li>
            <li class='filters-list__item'>
              {/* <!-- <div class="filters-list__item-text">
            Мясные
          </div>
          <div class="filters-list__btns-block">
            <button class="filters-list__btn icon-trash-empty"></button>
            <button class="filters-list__btn icon-pencil"></button>
          </div> --> */}
              <input
                class='filters-form__input filters-form__input_edit input'
                type='text'
                value='Мясные'
              />
              <button class='filters-form__btn filters-form__btn_save icon-floppy'></button>
              <button class='filters-form__btn filters-form__btn_save icon-cancel'></button>
            </li>
            <li class='filters-list__item'>
              <div class='filters-list__item-text'>Вегатарианские</div>
              <div class='filters-list__btns-block'>
                <button class='filters-list__btn icon-pencil'></button>
                <button class='filters-list__btn icon-trash-empty'></button>
              </div>
            </li>
            <li class='filters-list__item'>
              <div class='filters-list__item-text'>Гриль</div>
              <div class='filters-list__btns-block'>
                <button class='filters-list__btn icon-pencil'></button>
                <button class='filters-list__btn icon-trash-empty'></button>
              </div>
            </li>
            <li class='filters-list__item'>
              <div class='filters-list__item-text'>Острые</div>
              <div class='filters-list__btns-block'>
                <button class='filters-list__btn icon-pencil'></button>
                <button class='filters-list__btn icon-trash-empty'></button>
              </div>
            </li>
          </ul>

          <div class='filters-form__add-wrap'>
            <input
              class='filters-form__input filters-form__input_add input'
              type='text'
              placeholder='новый фильтр'
            />
            <button class='filters-form__btn icon-plus'>Добавить</button>
          </div>

          {/* <!-- <label class="filters-form__label" for="">Добавить фильтр</label> --> */}

          <div class='profile-form__btns'>
            <a href='' class='button button_grey profile-form__btn'>
              Назад
            </a>
            {/* <!-- <a href="" class="profile-form__btn login-btn button">Добавить</a> --> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFilters;
