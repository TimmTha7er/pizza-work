export default class PizzaService {
  _findActiveElement(elements) {
    return elements.findIndex((el) => {
      return el.available === true;
    });
  }

  _getActiveBases(res) {
    const activeBases = res.map((pizza) => {
      return {
        pizzaId: pizza.id,
        activeBase: this._findActiveElement(pizza.bases),
      };
    });

    return activeBases;
  }

  _getActiveSizes(res) {
    const activeSizes = res.map((pizza) => {
      return {
        pizzaId: pizza.id,
        activeSize: this._findActiveElement(pizza.sizes),
      };
    });

    return activeSizes;
  }

  _getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  };

  getPizzas = async (filter, sortBy, order) => {
    const res = await this._getResource(
      `/api/pizzas?_sort=${sortBy}&_order=${order}&_filter=${filter}`
    );

    return {
      pizzas: res,
      activeBases: this._getActiveBases(res),
      activeSizes: this._getActiveSizes(res),
    };
  };

  getCategories = async () => {
    const res = await this._getResource(`/api/categories`);
    const [{ filterCategories }, { sortCategories }] = res;

    return {
      filterCategories: filterCategories,
      sortCategories: sortCategories,
    };
  };
}
