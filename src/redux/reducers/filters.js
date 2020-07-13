const initialState = {
  filterCategories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'],
  sortCategories: ['популярности', 'цене', 'алфавиту'],
  filter: 0,
};

const filtersReducer = (state = initialState, action, fullState) => {
  switch (action.type) {
    case 'PIZZA_SORT':
      const category = action.payload;
      const sortedPizzas = [...fullState.pizzasList.pizzas];

      switch (category) {
        case 'популярности':
          sortedPizzas.sort((a, b) => b.rating - a.rating);
          break;
        case 'цене':
          sortedPizzas.sort((a, b) => b.price - a.price);
          break;
        case 'алфавиту':
          sortedPizzas.sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();

            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          sortedPizzas.sort((a, b) => b.rating - a.rating);
      }

      return {
        ...state,
        pizzas: sortedPizzas,
      };

    case 'PIZZA_FILTER':
      const filter = action.payload;

      return {
        ...state,
        filter: filter,
      };

    default:
      return state;
  }
};

export default filtersReducer;
