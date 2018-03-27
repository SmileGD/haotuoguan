import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource';

import index from '../components/index/index'
import growth from '../components/growth/growth'
import campus from '../components/campus/campus'
import mine from '../components/mine/mine'

import signIn from '../components/signIn/signIn'
import leave from '../components/leave/leave'
import recipes from '../components/recipes/recipes'
import monitor from '../components/monitor/monitor'
import geneTest from '../components/geneTest/geneTest'
import teacherIntro from "../components/teacherIntro/teacherIntro"
import personal from '../components/personal/personal'
import modifyPwd from '../components/modifyPwd/modifyPwd'
import change from '../components/change/change'


Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    //首页
    {path: '/index', name: 'index', component: index},
    //成长
    {path: '/growth', name: 'growth', component: growth},
    //校区
    {path: '/campus', name: 'campus', component: campus},
    //我的
    {path: '/mine', name: 'mine', component: mine},
    //签到记录
    {path: '/signIn', name: 'signIn', component: signIn},
    //请假
    {path: '/leave', name: 'leave', component: leave},
    //食谱
    {path: '/recipes', name: 'recipes', component: recipes},
    //校园监控
    {path: '/monitor', name: 'monitor', component: monitor},
    //基因检测
    {path: '/geneTest', name: 'geneTest', component: geneTest},
    //教室介绍
    {path: '/teacherIntro', name: 'teacherIntro', component: teacherIntro},
    //修改个人信息
    {path: '/personal', name: 'personal', component: personal},
    //修改密码
    {path: '/modifyPwd', name: 'modifyPwd', component: modifyPwd},
    //切换页面
    {path: '/change', name: "change", component: change}
  ]
})
