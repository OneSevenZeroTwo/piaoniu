<template>
	<div class="liuxing">
		<div class="title">
			<p>流行</p>
			<span>最热</span>
			<span>最新</span>
		</div>
		<div class="list" v-for="n in liuxing" @click="sethash(n.hash)">
			<p class="keepplay">{{n.filename|nomore}}</p>
		</div>
		<div class="player" v-if="showplay1">
    		<ul class="action">
    			<li class="thenamep">
    				<img :src="playsongpic|getsize" alt="">
    			</li>
	        	<li id="stop" class="iconfont play icon-stop" @click="stop()"></li>
	        	<li class="iconfont icon-next"></li>
	        	<li class="iconfont icon-list"></li>
    		</ul>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			liuxing(){
				return this.$store.state.liuxing
			},
			playhash(){
				return this.$store.state.hashsong
			},
			playsongpic(){
				return this.$store.state.playsongpic
			},
			showplay1(){
				return this.$store.state.showplay
			}
		},
		methods:{
			setliuxing(){
				this.$store.state.kind = 28061,
				this.$store.dispatch("setliuxing")
			},
			sethash(seth){
				this.$store.state.hash = seth;
				this.$store.state.showplay = true;
				this.$store.dispatch("playthesong");
				this.showplay = true
			},
			stop(){
				sessionStorage.removeItem("playsongurl")
			}
		},
		filters:{
			getsize(input){
				var arr = input.split("{size}");
				return arr.join("")
			},
			nomore(input){
				if(input.length>=25){
					return input.substring(0,25)+"..."
				}else{
					return input
				}
			}
		},
		mounted:function(){
			this.setliuxing()
		}
	}
</script>
<style scoped>
.liuxing{
	margin-top: 100px;
	width: 90%;
	margin-left: 5%;
}
.title{
	overflow: hidden;
}
.title p{
	width: 50%;
	font-weight: bold;
	float: left;
	height: 24px;
	line-height: 24px;
}
.title span{
	display: block;
	width: 50px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	float: right;
}
.list p{
	height: 40px;
	line-height: 40px;
}
.player{
	position: relative;
}
.player ul{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
}
.player ul li{
	height: 30px;
	float: left;
	font-size: 30px;
	line-height: 50px;
	width: 25%;
	text-align: center;
}
.player ul li span{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
	overflow: hidden
}
</style>