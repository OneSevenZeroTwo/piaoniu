//引入vue框架
import Vue from "vue";
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//axios的ajax封装库
import axios from "axios";
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(Vuex);
//通过 Vue.use()明确地安装路由功能
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
	//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
//拥入weui样式库
import "weui"
//引入组件
import home from "./components/routers/home.vue";

var router = new VueRouter({
	routes: [{
		path: '/index',
		component:home
	}]
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
	},
	getters: {
	},
	//分发状态
	mutations: {
	},
	//action就是触发mutations
	actions: {
	}
})

new Vue({
	el: "#demo",
	template: `
		<router-view></router-view>
	`,
	router,
	store,
})