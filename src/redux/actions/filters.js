export const pizzasSort = (category) => {
  return {
    type: 'PIZZA_SORT',
    payload: category,
  };
};

export const pizzasFilter = (category) => {
  return {
    type: 'PIZZA_FILTER',
    payload: category,
  };
};


