import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource';

import index from '../components/index/index'
import dymanic from '../components/dymanic/dymanic'
import campus from '../components/campus/campus'
import mine from '../components/mine/mine'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    //首页
    {path: '/index', component: index},
    //动态
    {path: '/dymanic', component: dymanic},
    //校区
    {path: '/campus', component: campus},
    //我的
    {path: '/mine', component: mine}
  ]
})
