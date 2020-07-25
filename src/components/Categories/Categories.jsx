import React, { useEffect } from 'react';
import {
  Sort,
  Filters,
  CategoriesLoader,
  ErrorIndicator,
} from '../../components';
import { connect } from 'react-redux';
import { fetchCategories } from '../../redux/actions';

const Categories = ({ fetchCategories, loading, error }) => {
  useEffect(() => {
    fetchCategories();
  }, []); //

  if (loading) {
    return (
      <div className='content__top-line'>
        <CategoriesLoader />
      </div>
    );
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div className='content__top-line'>
      <Filters />
      <Sort />
    </div>
  );
};

const mapStateToProps = ({ categories: { loading, error } }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { pizzaStoreService }) => {
  return {
    fetchCategories: fetchCategories(dispatch, pizzaStoreService),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
