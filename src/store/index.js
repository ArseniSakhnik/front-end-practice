import Vue from 'vue'
import Vuex from 'vuex'
import legalEntity from "./modules/legalEntity";
import pharmacy from "./modules/pharmacy";
import order from "./modules/order";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    legalEntity,
    pharmacy,
    order
  },
})
