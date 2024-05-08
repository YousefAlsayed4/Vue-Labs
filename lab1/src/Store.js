import axios from "axios";

import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      Cart: [],
      Products: [],
      Product: {},
    };
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.Products = products;
    },
    CREATE_PRODUCT(state, product) {
      state.Products.push(product);
    },
    DELETE_PRODUCT(state, id) {
      state.Products = state.Products.filter((p) => p.id !== id);
    },
    EDIT_PRODUCT(state, product) {
      const index = state.Products.findIndex((p) => p.id === product.id);
      state.Products[index] = product;
    },
    GET_PRODUCT_BY_ID(state, product) {
      state.Product = product;
    },
    addProductToCart(state, product) {
      if (product.quantity >= 1) {
        // product.quantity++;
        state.Cart.find((p) => p.id === product.id).quantity++;
      } else {
        product.quantity = 1;
        state.Cart.push(product);
      }

      console.log(state.Cart);
    },
    removeProductFromCart(state, product) {
      if (product.quantity >= 1) {
        // product.quantity--;
        state.Cart.find((p) => p.id === product.id).quantity--;
      } else {
        state.Cart = state.Cart.filter((p) => p.id !== product.id);
      }
    },
    getCart(state) {
      return state.Cart;
    },
  },

  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:3000/products").then((res) => {
        commit("GET_PRODUCTS", res.data);
        console.log(res.data);
      });
    },
    getProductById({ commit }, id) {
      axios.get(`http://localhost:3000/products/${id}`).then((res) => {
        commit("GET_PRODUCT_BY_ID", res.data);
      });
    },
    createProduct({ commit }, product) {
      axios.post("http://localhost:3000/products", product).then((res) => {
        commit("CREATE_PRODUCT", res.data);
      });
    },
    editProduct({ commit }, product) {
      axios
        .put(`http://localhost:3000/products/${product.id}`, product)
        .then((res) => {
          commit("EDIT_PRODUCT", res.data);
        });
    },
    deleteProduct({ commit }, id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          commit("DELETE_PRODUCT", { id });
          console.log(id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart({ commit }, product) {
      commit("addProductToCart", product);
    },
    removeFromCart({ commit }, product) {
      commit("removeProductFromCart", product);
    },
    getCart({ commit }) {
      commit("getCart");
    },
  },
  getters: {
    getProducts: (state) => state.Products,
    getProductById: (state) => state.Product,
    getCart: (state) => state.Cart,
  },
});

export default store;
