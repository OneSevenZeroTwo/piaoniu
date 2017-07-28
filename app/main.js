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
// 引入muzeUi
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
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
import subcate from "./components/routers/subcate.vue";
import liuxing from "./components/routers/liuxing.vue";
import wangluo from "./components/routers/wangluo.vue";
import minyao from "./components/routers/minyao.vue";
import oumei from "./components/routers/oumei.vue";
import qingge from "./components/routers/qingge.vue";
import regebang from "./components/routers/regebang_2.vue";
import xingebang from "./components/routers/xingebang_2.vue";
import kingbang from "./components/routers/kingbang_2.vue";
import gengduoxg from "./components/routers/gengduoxg.vue";
import subsearch from "./components/routers/subsearch.vue";
var router = new VueRouter({
	routes: [{
		path: '/recommend',
		component: recommend,
		children:[{
			path:'/recommend/regebang',
			component:regebang,
		},{
			path:'/recommend/xingebang',
			component:xingebang,
		},{
			path:'/recommend/kingbang',
			component:kingbang,
		}]
	}, {
		path: '/gengduoxg',
		component: gengduoxg,
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
	}, {
		path: '/search',
		component: search
	}, {
		path:'/subcate',
		component:subcate,
		children:[{
			path:'liuxing',
			component:liuxing
		},{
			path:'wangluo',
			component:wangluo
		},{
			path:'minyao',
			component:minyao
		},{
			path:'oumei',
			component:oumei
		},{
			path:'qingge',
			component:qingge
		}]
	},{
			path:'/subsearch',
			component:subsearch
	},{
		path: '/',
		redirect: '/recommend/regebang'
	}]
});

//新建一个状态管理
var store = new Vuex.Store({
	//定义一个状态
	//所有组件的状态，也就是数据源
	state: {
		bottomLight:'recommend',
		bill:[],
		hot:[],
		news:[],
		page:0,
		count: 1,
		isshow:"true",
		art:[],
		mtv:[],
		news: [],
		arrs:[],
		re:[],
		liuxing:[],
		kind:null,
		tui:[],
		rege:[],
		xinge:[],
		king:[],
		xg01:[],
		xg02:[],
		direction:"",
		mysearch:null,
		backsong:[]
	},
	getters: {},
	//分发状态
	//action就是触发mutations
	actions: {
		setbill(context, data) {
			context.commit("bill")
		},
		setChange(context, data) {
			context.commit('setNews', data),
			context.commit('setArrs', data),
			context.commit('setRe', data),
			context.commit('setTui', data),
			context.commit('setRege', data),
			context.commit('setXinge', data),
			context.commit('setKing', data),
			context.commit('setXg', data),
			context.commit('setXg02', data)
		},
		sethot(context, data) {
			context.commit('hot', data)
		},
		Xart(context, data) {
			context.commit('xart', data)
		},
		Mtv(context, data) {
			context.commit('mtv', data)
		},
		setliuxing(context, data) {
			context.commit('liuxing', data)
		},
		getmsg(context, data) {
			context.commit('getsearch', data)
		},
	},
	
	//分发状态
	mutations: {
//		setCount(state, data) {
//			state.direction = data
//		},
		xart(state) {
			axios.get("http://localhost:6789/xart", {

				}).then((response) => {
					console.log(response.data.song_list)
					state.art = state.art.concat(response.data.song_list)
				})
				.catch((error) => {
					console.log(error);
				});
		},
		setCount(state, data) {
			console.log(data)
			state.count = data
		},
		setNews(state) {
			axios.get('http://localhost:6789/index', {	
				})
				.then((response) => {
					console.log(response.data.song_list)
					state.news = response.data.song_list;
					params: {
						//page: state.page++,
					}
				})
				.then((response) => {
					console.log(response.data.song_list)
					state.news = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		新歌速递
		setArrs(state) {
			axios.get('http://localhost:6789/xin', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.arrs = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		热门歌单
		setRe(state) {
			axios.get('http://localhost:6789/re', {
					params: {
					}
				})
				.then((response) => {
//					console.log(response.data.song_list)
					state.re = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		推荐
		setTui(state) {
			axios.get('http://localhost:6789/tui', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.tui = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		热歌榜
		setRege(state) {
			axios.get('http://localhost:6789/rege', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.rege = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		新歌榜
		setXinge(state) {
			axios.get('http://localhost:6789/xinge', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.xinge = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		king榜
		setKing(state) {
			axios.get('http://localhost:6789/king', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.king = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
//		新歌更多
		setXg(state) {
			axios.get('http://localhost:6789/xg', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.xg01 = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		setXg02(state) {
			axios.get('http://localhost:6789/xg02', {
					params: {
						
					}
			}).then((response) => {
//					console.log(response.data.song_list)
					state.xg02 = response.data.song_list;
//					state.news = state.news.concat(response.data.song_list);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		bill(state) {
			axios.get("http://localhost:6789/bill", {
			}).then((response) => {
               state.bill = state.bill.concat(response.data.song_list)
			})
			.catch((error) => {
				console.log(error);
			});
		},
		hot(state) {
			axios.get("http://localhost:6789/hot", {
				params: {
						page: state.page,
					}
			}).then((response) => {
               state.hot = state.hot.concat(response.data.song_list)
				
			})
			.catch((error) => {
				console.log(error);
			});
		},
		mtv(state) {
			axios.get("http://localhost:6789/mtv", {

			}).then((response) => {
					state.mtv = state.mtv.concat(response.data.song_list)
				}).then((response) => {
					console.log(response.data.song_list)
					state.bill = state.bill.concat(response.data.song_list)
				})
				.catch((error) => {
					console.log(error);
				});
		},

		//分类流行音乐
		liuxing(state) {
			axios.get("http://localhost:6789/liuxing", {
				params: {
						type:state.kind
					}
			}).then((response) => {	
				state.liuxing = response.data.song_list
				}).catch((error) => {
					console.log(error);
				});
		},



		//获取搜索
		getsearch(state) {
			axios.get("http://localhost:6789/search", {
				params: {
						type:state.mysearch
					}
			}).then((response) => {	
				console.log(response.data.song,"000")
				state.backsong = response.data.song
				}).catch((error) => {
					console.log(error);
				});
		},
		
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