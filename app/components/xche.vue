<template>
	<div>
		<div id="che" :class="{'sidebar-move-left':direction=='left','sidebar-move-right':direction=='right'}">
			<div class="tou">
				<div class="tou_01"><img src="img/0.jpg" alt="" class="touxiang am-img-circle am-img-thumbnail am-img-thumbnail" ng-click="xian()" /></div>
				<div class="tou_02"><span class="ceBianDeng">未登录</span></div>
			</div>
			<div class="list">
				<ul>
					<li class="yi" @click=""><span class="iconfont ziti">&#xe675;</span><span>Mail firend</span><span>></span></li>
					<li class="er" @click=""><span class="iconfont ziti">&#xe646;</span><span>Mail link</span><span>></span></li>
					<li class="san" @click=""><span class="iconfont ziti">&#xe648;</span><span>Mail timing</span><span>></span></li>
					<li class="si" @click=""><span class="iconfont ziti">&#xe60a;</span><span>Mail inbox</span><span>></span></li>
					<li class="wu" @click=""><span class="iconfont ziti">&#xe611;</span><span>Mail inbox</span><span>></span></li>
				</ul>
			</div>
			<div class="dibu">
				<div class="dibu_01"><span class="iconfont" @click="directionTo">&#xe639;</span></div>
			</div>
			<!--<div class="huan" style="display:{{isShowShang?'block':'none'}};">
			<div class="huan01">
				<span class="iconfont huantu" @click = "cang()">&#xe639;</span>
				<form class="am-form tupian" id="tupian">
					<div class="am-form-group">
						<input type="file" id="user-pic" name="logo">
						<p class="am-form-help">请选择要上传的文件...</p>
					</div>
				</form>
				<button type="button" class="am-btn am-btn-primary " id="am-btn-xs" ng-click = "shangchuan();cang()" >保存</button>
			</div>
		</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
//				direction:this.$store.state.direction
			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			direction() {
				return this.$store.state.direction
			},
		},
		methods: {
			loadMore() {
				this.$store.dispatch("setChange")
			},
			changeTab: function(index) {
				this.page = index;
			},
			directionTo() {
				this.$store.state.direction="left",
				this.$store.dispatch("setChange",this.$store.state.direction)
			},
		},
		mounted() {
			this.loadMore();
		},
	}
</script>

<style scoped>
	#che {
		color: #F1F2F3;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: -320px;
		z-index: 8890;
		background: rgba(0, 0, 0, .8);
	}
	
	#che .tou {
		position: relative;
		width: 320px;
		height: 208px;
		border-bottom: 1px solid #a26363;
	}
	
	#che .tou .tou_01 {
		position: absolute;
		top: 50px;
		left: 105px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	
	#che .tou .tou_01 .touxiang {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	#che .tou .tou_02 {
		text-align: center;
		position: absolute;
		top: 150px;
		left: 135px;
		color: #F1F2F3;
	}
	
	#che .list ul li {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #a26363;
		line-height: 50px;
	}
	
	#che .list ul li span {
		display: inline-block;
		width: 33%;
		text-align: center;
	}
	
	#che .list ul li span:last-child {
		padding-right: 15px;
		text-align: right;
	}
	
	#che .list ul li span:first-child {
		text-align: left;
		padding-left: 20px;
		font-size: 24px;
	}
	
	#che .dibu {
		position: relative;
	}
	
	#che .dibu .dibu_01 {
		position: absolute;
		top: 30px;
		left: 135px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		/*background-color: #A1A1A1;*/
		text-align: center;
		line-height: 30px;
		/*border: 1px solid #ccc;*/
	}
	
	#che .dibu .dibu_01 span {
		font-size: 30px;
	}
	/*实现动画部分*/
	/*组件的样式*/
	/*向左滑动的动画*/
	
	@keyframes moveLeft {
		from {
			transform: translateX(320px);
		}
		to {}
	}
	
	.sidebar-move-left {
		animation: moveLeft;
		/*持续时间*/
		animation-duration: 1s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	/*向右边滑动的动画*/
	
	@keyframes moveRight {
		from {}
		to {
			transform: translateX(320px);
		}
	}
	
	.sidebar-move-right {
		animation: moveRight;
		/*持续时间*/
		animation-duration: 1s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	
	.huan {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1002;
	}
	
	.huan .huan01 {
		width: 200px;
		height: 200px;
		background-color: #fff;
		border-radius: 10px;
		position: absolute;
		top: 155px;
		left: 45px;
		z-index: 1003;
		padding-left: 30px;
		padding-top: 50px;
		box-sizing: border-box;
	}
	
	.huan .huan01 .huantu {
		position: absolute;
		top: 0px;
		right: 5px;
		color: #ccc;
	}
</style>