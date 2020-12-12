const { defaultTo } = require("lodash");

export default {
    namespaced: true,
    state: {
        productModule: 'Product Module'
    },
    getters: {
        getModuleName(state){
            return state.productModule
        }
    }
}