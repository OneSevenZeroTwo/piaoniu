//引入vue框架
import Vue from "vue";
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
import VueResource from 'vue-resource';
//axios的ajax封装库
import axios from "axios";
//引入公共样式 全局
//添加样式
require("./css/common.css")
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);
Vue.use(Vuex);
//vue-mui
//import Mui from "vue-awesome-mui";
//import "vue-awesome-mui/mui/dist/css/mui.css"
//Vue.use(Mui);
//通过 Vue.use()明确地安装路由功能
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper)
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
//拥入weui样式库
import "weui"
//引入组件
import recommend from "./components/routers/recommend.vue";
import cate from "./components/routers/cate.vue";
import bill from "./components/routers/bill.vue";
import artists from "./components/routers/artists.vue";
import mv from "./components/routers/mv.vue";
import search from "./components/routers/search.vue";

var router = new VueRouter({
	routes: [{
		path: '/recommend',
		component: recommend
	}, {
		path: '/cate',
		component: cate
	}, {
		path: '/bill',
		component: bill
	}, {
		path: '/artists',
		component: artists
	}, {
		path: '/mv',
		component: mv
	},
	{
		path: '/search',
		component:search
	},{
		path: '/',
		redirect: '/recommend'
	}]
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
<<<<<<< HEAD
		bottomLight: true,
		bill: [],
		img:"./images/1.jpg",
=======
		bottomLight:true,
		count: 1,
		news:[],
		isshow:"true",
>>>>>>> 0278d070beb410c73cfcfe06b3210a2f1d6fd006
	},
	getters: {},
	//分发状态
	//action就是触发mutations
	actions: {
		setbill(context, data) {
			context.commit("bill")
		},
		setChange(context, data) {
			context.commit('setNews', data)
		},
	},
	//分发状态
	mutations: {
		setCount(state, data) {
			console.log(data)
			state.count = data
		},
		//		settitle(state, data) {
		//			state.title = data
		//		},
		//		'https://cnodejs.org/api/v1//topics'
		setNews(state) {
			axios.get('http://localhost:6789/index', {
					params: {
						//						page: state.page++,
					}
				})
				.then((response) => {
					console.log(response.data)
					state.news = state.news.concat(response.data.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		bill(state) {
			axios.get("http://localhost:6789/bill", {

				}).then((response) => {
					console.log(response.data.song_list)
					state.bill = state.bill.concat(response.data.song_list)
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
})

new Vue({
	el: "#demo",
	template: `
		<router-view></router-view>
	`,
	router,
	store,
})