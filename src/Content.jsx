import React from 'react';

import pizzaImg from './img/content/cheeseburger-pizza.png';

const Content = () => {
  return (
    <section className='content'>
      <div className='content__top-line'>
        <div className='categories'>
          <ul className='categories__list'>
            <li className='categories__item categories__item_active'>Все</li>
            <li className='categories__item'>Мясные</li>
            <li className='categories__item'>Вегетарианская</li>
            <li className='categories__item'>Гриль</li>
            <li className='categories__item'>Острые</li>
          </ul>
        </div>

        <div className='sort icon-up-dir'>
          <span className='sort__label'>Сортировка по:&nbsp;</span>
          <span className='sort__selected-item'>популярности</span>

          <div className='sort-popup sort__sort-popup'>
            <ul className='sort-popup__list'>
              <li className='sort-popup__item sort-popup__item_active'>
                популярности
              </li>
              <li className='sort-popup__item'>цене</li>
              <li className='sort-popup__item'>алфавиту</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='content__body'>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__pizza-list'>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className='pizza content__pizza'>
            <div className='pizza__img-wrap'>
              <img
                className='pizza__img'
                src={pizzaImg}
                alt='pizza'
              />
            </div>

            <div className='pizza__name'>Чизбургер-пицца</div>

            <div className='pizza__options'>
              <div className='pizza__base-list'>
                <span className='pizza__base pizza__base_active'>тонкое</span>
                <span className='pizza__base pizza__base_disable'>
                  традиционное
                </span>
              </div>
              <div className='pizza__size-list'>
                <span className='pizza__size pizza__size_active'>26 см.</span>
                <span className='pizza__size'>30 см.</span>
                <span className='pizza__size'>40 см.</span>
              </div>
            </div>
            <div className='pizza__bot-line'>
              <div className='pizza__price icon-rouble'>395</div>
              <div className='pizza__btn icon-plus'>
                <span className='pizza__btn-text'>Добавить</span>
                <div className='pizza__count-wrap'>
                  <span className='pizza__count'>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
