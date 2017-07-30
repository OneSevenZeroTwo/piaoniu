<template>
	<div>
		<div id="shou" :class="{'sidebar-move-lefter':directionC=='lefter','sidebar-move-righter':directionC=='righter'}">
			<div class="shou_top">
				<div class="fan iconfont" @click="jian"><strong><</strong></div>
				<div class="tu iconfont" @click="directionToC">&#xe639;</div>
			</div>
			<div class="shou_footer">
				<ul>
					<li><img src="../images/lun03.jpg" alt="" /><span class="geshou">薛之谦</span><span class="geming">歌曲名称</span></li>
					<li><img src="../images/lun03.jpg" alt="" /><span class="geshou">薛之谦</span><span class="geming">歌曲名称</span></li>
				</ul>
			</div>
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
			directionC() {
				return this.$store.state.directionC
			},
		},
		methods: {
			directionToC() {
				this.$store.state.directionC="righter",
				this.$store.dispatch("setChange",this.$store.state.directionC)
			},
			loadMore() {
				this.$store.dispatch("setChange",this.$store.state.directionC)
			},
			jian() {
				this.$store.state.direction="right",
				this.$store.dispatch("setChange",this.$store.state.direction),
				this.$store.state.directionC = "righter"
			},
//			changeTab: function(index) {
//				this.page = index;
//			},
		},
		mounted() {
			this.loadMore();
		},
	}
</script>

<style scoped>
	#shou{
		width: 320px;
		height: 100px;
		/*background-color: red;*/
		/*min-height: 568px;*/
		position: fixed;
		top: 0;
		right: -320px;
		z-index: 10000;
	}
	#shou .shou_top{
		position: relative;
		width: 100%;
		height: 230px;
		background: rgba(0,0,0,0.8);
	}
	#shou .shou_top .fan{
		position: absolute;
		top: 15px;
		left: 10px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #fff;
		text-align: center;
		line-height: 18px;
	}
	#shou .shou_top .fan strong{
		color: #000;
		font-size: 16px;
	}
	#shou .shou_top .tu{
		position: absolute;
		top: 10px;
		right: 10px;
		color: #fff;
		font-size: 20px;
	}
	#shou .shou_footer{
		min-height: 538px;
		background-color: #ccc;
	}
	#shou .shou_footer ul{
		padding: 10px;
	}
	#shou .shou_footer ul li{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #8C8C8C;
		overflow: hidden;
		padding: 5px 0;
		
	}
	#shou .shou_footer ul li>img{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	#shou .shou_footer ul li .geshou{
		display: inline-block;
		width: 100px;
		height: 40px;
		text-align: center;
		layout-grid-char: 40px;
		font-size: 12px;
		color: #8C8C8C;
	}
	#shou .shou_footer ul li .geming{
		display: inline-block;
		width: 150px;
		height: 40px;
		text-align: center;
		layout-grid-char: 40px;
		font-size: 12px;
		color: #8C8C8C;
	}
	
	
	@keyframes moveLeft {
		from {
			
		}
		to {transform: translateX(-320px);}
	}
	
	.sidebar-move-lefter {
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
		from {transform: translateX(-320px);}
		to {
			
		}
	}
	
	.sidebar-move-righter {
		animation: moveRight;
		/*持续时间*/
		animation-duration: 1s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
</style>