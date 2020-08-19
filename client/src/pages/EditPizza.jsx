import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchPizza } from '../redux/actions';
import { ErrorIndicator, pizzaStoreContext } from '../components';
import { connect } from 'react-redux';

const EditPizza = ({
  match,
  fetchPizza,
  pizza,
  error,
  loading,
  filterCategories,
}) => {
  const pizzaStoreService = useContext(pizzaStoreContext);

  useEffect(() => {
    fetchPizza(match.params.id, pizzaStoreService);
  }, []);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <div>loading</div>;
  }

  const { id, bases, sizes, category, imageUrl, name, price, rating } = pizza;
  const selectedCategory = filterCategories[category].name;
  console.log(filterCategories);

  const categoriesList = filterCategories.map((item, index) => {
    return (
      <option
        key={index}
        // value={category.name}
        // selected={category === index ? true : false}
      >
        {item.name}
      </option>
    );
  });

  const basesList = bases.map((base, index) => {
    return (
      <React.Fragment key={index}>
        <input
          className='pizza-form__checkbox visually-hidden'
          type='checkbox'
          name={base.name}
          id={`base-${index}`}
          defaultChecked={base.available ? true : false}
        />
        <label htmlFor={`base-${index}`} className='pizza-form__ch-b-label'>
          {base.name}
        </label>
      </React.Fragment>
    );
  });

  const sizesList = sizes.map((size, index) => {
    return (
      <React.Fragment key={index}>
        <input
          className='pizza-form__checkbox visually-hidden'
          type='checkbox'
          name={`${size.name} см.`}
          id={`size-${index}`}
          defaultChecked={size.available ? true : false}
        />
        <label htmlFor={`size-${index}`} className='pizza-form__ch-b-label'>
          {size.name} см.
        </label>
      </React.Fragment>
    );
  });

  return (
    <div className='edit-pizza page'>
      <div className='container edit-pizza__container'>
        <h2 className='edit-pizza__title'>Редактирование пиццы</h2>
        <form action='' className='pizza-form'>
          <label htmlFor='' className='pizza-form__label'>
            Ссылка на картинку
          </label>
          <input
            type='text'
            className='pizza-form__input input'
            defaultValue={imageUrl}
          />
          <label htmlFor='' className='pizza-form__label'>
            Название
          </label>
          <input
            type='text'
            className='pizza-form__input input'
            defaultValue={name}
          />
          <label htmlFor='' className='pizza-form__label'>
            Цена
          </label>
          <input
            type='text'
            className='pizza-form__input input'
            defaultValue={price}
          />

          <label htmlFor='' className='pizza-form__label'>
            Категория
          </label>
          {/* <!-- <input type="text" className="pizza-form__input input" /> --> */}

          <div className='pizza-form__select-wrap'>
            <select
              className='select'
              name='filters'
              defaultValue={selectedCategory}
            >
              {categoriesList}
            </select>
          </div>

          <label htmlFor='' className='pizza-form__label'>
            Рейтинг
          </label>
          <input
            type='text'
            className='pizza-form__input input'
            defaultValue={rating}
          />

          <fieldset className='pizza-form__bases'>
            <legend className='pizza-form__legend'>Доступные основы:</legend>
            {basesList}
          </fieldset>

          <fieldset className='pizza-form__sizes'>
            <legend className='pizza-form__legend'>Доступные размеры:</legend>
            {sizesList}
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

const mapStateToProps = ({
  editPizza: { pizza, error, loading },
  categories: { filterCategories },
}) => {
  return {
    loading,
    error,
    pizza,
    filterCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPizza: fetchPizza(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPizza);
