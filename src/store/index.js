import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,
        loggedUser: {}
    },
    mutations: {
        setLoggedUser(state, data) {
            state.loggedUser = data
            state.isLogged = true
        },
        deleteLoggedUser(state, data) {
            state.loggedUser = {}
            state.isLogged = false
        }
    },
    actions: {},
    modules: {}
})
