import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource';

import index from 'components/index/index';
import growth from 'components/growth/growth';
import campus from 'components/campus/campus';
import mine from 'components/mine/mine';
import sign_in from 'components/sign-in/sign-in';

import leave from 'components/leave/leave';
import recipes from 'components/recipes/recipes';
import monitor from 'components/monitor/monitor';
import gene_test from 'components/gene-test/gene-test';
import teacher_intro from "components/teacher-intro/teacher-intro";

import personal from 'components/personal/personal';
import modify_pwd from 'components/modify-pwd/modify-pwd';
import change from 'components/change/change';
import licence from 'components/licence/licence';
import login from 'components/login/login';

import forget_pwd from 'components/forget-pwd/forget-pwd';
import retrieve from 'components/retrieve/retrieve';
import env_pic from 'components/org-env-pic/org-env-pic';
import code_login from 'components/code-login/code-login';
import register from 'components/register/register';

Vue.use(Router)
Vue.use(vueResource)

let router = new Router({
	mode: 'history', //当你使用 history 模式时，URL 就像正常的 url  更好看
	routes: [
		{path: '/', redirect: '/index'},
		//首页
		{path: '/index', name: 'index', component: index, meta: { title: '首页', keepAlive: true}},
		//成长
		{path: '/growth', name: 'growth', component: growth, meta: {title: '成长时光', keepAlive: true}},
		//校区
		{path: '/campus', name: 'campus', component: campus, meta: {title: '校区', keepAlive: true}},
		//我的
		{path: '/mine', name: 'mine', component: mine, meta: {title: '我的', keepAlive: true}},
		//签到记录
		{path: '/sign_in', name: 'sign_in', component: sign_in, meta: {title: '签到记录', keepAlive: false}},
		//请假
		{path: '/leave', name: 'leave', component: leave, meta: {title: '请假', keepAlive: false}},
		//食谱
		{path: '/recipes', name: 'recipes', component: recipes,  meta: {title: '食谱', keepAlive: true}},
		//校园监控
		{path: '/monitor', name: 'monitor', component: monitor, meta: {title: '校园监控', keepAlive: true}},
		//基因检测
		{path: '/gene_test', name: 'gene_test', component: gene_test, meta: {title: '基因检测', keepAlive: true}},
		//教师介绍
		{path: '/teacher_intro', name: 'teacher_intro', component: teacher_intro, meta: {title: '教师介绍', keepAlive: true}},
		//修改个人信息
		{path: '/personal', name: 'personal', component: personal, meta: {title: '设置个人信息', keepAlive: false}},
		//修改密码
		{path: '/modify_pwd', name: 'modify_pwd', component: modify_pwd, meta: {title: '修改密码', keepAlive: false}},
		//切换页面
		{path: '/change', name: "change", component: change, meta: {title: '切换机构/孩子', keepAlive: false}},
		// 机构环境
		{path: '/env_pic', name: 'env_pic', component: env_pic, meta: {title: '机构环境', keepAlive: false}},
		//机构许可证
		{path: '/licence', name: 'licence', component: licence, meta: {title: '机构许可证', keepAlive: true}},
		// 登录页面
		{path: '/login', name: 'login', component:login, meta: {title: '登录', keepAlive: false}},
		// 注册页面
		{path: '/register', name: 'register', component: register, meta: {title: '注册', keepAlive: false}},
		// 验证码登录
		{path: '/code_login', name: 'code_login', component: code_login, meta: {title: '验证码登录', keepAlive: false}},
		// 忘记密码
		{path:'/forget_pwd',name: 'forget_pwd', component: forget_pwd, meta: {title: '忘记密码', keepAlive: false}},
		// 找回密码
		{path:'/retrieve',name: 'retrieve', component: retrieve, meta: {title: '找回密码', keepAlive: false}}
	]
})

	router.beforeEach((to, from, next) => {
		/* 路由发生变化修改页面title */
		if (to.meta.title) {
			document.title = to.meta.title;
		}else {
			document.title = "好托管";
		}
		next();
	})

	export default router;