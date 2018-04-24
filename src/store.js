import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        values: 0
    },
    mutations: {
        ADD_VALUE(state, value) {
            state.values = value
        }
    },
    
});