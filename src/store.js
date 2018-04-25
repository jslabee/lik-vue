import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        values: 1
    },
    mutations: {
        ADD_VALUE(state, value) {
            state.values = value
        }
    },
    actions : {
        add_value: (state, value)=> {
            state.commit("ADD_VALUE", value)
        }
    }
});