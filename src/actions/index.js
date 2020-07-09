const pizzasLoaded = (newPizzas) => {
  return {
    type: 'PIZZAS_LOADED',
    payload: newPizzas,
  };
};

// const pizzaAddedToCart = (bookId) => {
//   return {
//     type: 'BOOK_ADDED_TO_CART',
//     payload: bookId,
//   };
// };

// const pizzaRemovedFromCart = (bookId) => {
//   return {
//     type: 'BOOK_REMOVED_FROM_CART',
//     payload: bookId,
//   };
// };

// const allPizzasRemovedFromCart = (bookId) => {
//   return {
//     type: 'ALL_BOOKS_REMOVED_FROM_CART',
//     payload: bookId,
//   };
// };

export {
  pizzasLoaded,
  // pizzaAddedToCart,
  // pizzaRemovedFromCart,
  // allPizzasRemovedFromCart,
};
