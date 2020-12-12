import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import testPage from './test.vue'

import accountRoutes from '../../Modules/Accounts/Resources/assets/js/router'
import productstRoutes from '../../Modules/Products/Resources/assets/js/router'
console.log(accountRoutes);

const defaultRoutes = [
    {path: '/test', component: testPage}
]

var routes = [];

routes = routes.concat(
    defaultRoutes,
    accountRoutes,
    productstRoutes
)


export default new Router({
    mode: 'history',
    routes,
})