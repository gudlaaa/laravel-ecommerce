const { defaultTo } = require("lodash");

export default {
    namespaced: true,
    state: {
        accountModule: 'Account Module'
    },
    getters: {
        getModuleName(state){
            return state.accountModule
        }
    }
}