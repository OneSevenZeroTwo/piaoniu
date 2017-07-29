<template>
	<div>
		<div class="detail">
			<div class="pic">
				<img :src="pic" alt="">
			</div>
		</div>
		<div v-for="(n,$index) in backsong"  class="song" @click="plays($index,n.songname)">
			<span class="t">{{n.songname}}<i class="sq"></i></span>
			<p class="p"><img src="../images/1.gif" alt="" v-if="$index==page&&player">{{n.artistname}}<i class="load"></i></p>
		</div>
		<div class="player" v-if="player">
    		<ul class="action">
    			<li class="thenamep">
    				<img :src="pic" alt="">
    				<span class="thename">{{psong}}</span>
    			</li>
	        	<li  @click="plays()" class="iconfont play icon-stop"></li>
	        	<li class="iconfont icon-next"></li>
	        	<li class="iconfont icon-list"></li>
    		</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				page:null,
				player:false,
				psong:null
			}
		},
		methods:{
			detaillist:function(){
				console.log(666)
				this.$store.state.mysearch = this.$store.state.detailname;
				this.$store.dispatch("getmsg");
			},
			plays:function(index,psong){
				this.page = index;
				this.player = !this.player
				this.psong = psong 
			}
		},
		computed:{
			pic(){
				return this.$store.state.detailpic
			},
			backsong(){
				return this.$store.state.backsong
			},
			playsong(index){
				this.page = index
			}
		},
		mounted(){
			console.log(this.$store.state.backsong)
			this.detaillist()
		}
	}
</script>
<style scoped>
	.detail{
		margin-top: 100px;
		position: relative;
	}	
	.pic{
		height: 200px;
		overflow: hidden
	}
	.pic img{
		width: 100%;
	}
	.song{
		padding:10px;
		border-bottom: 1px solid pink
	}
	.p{
		font-size: 12px;
		color:#999;
		position: relative;
	}
	.t{
		position: relative;
	}
	.sq{
		display: block;
		width: 40px;
		height: 40px;
		position: absolute;
		right: -30px;
		top: -18px;
		background: url(../images/4.png)-400px -220px;
		background-size: 220px
	}
	.load{
		display: block;
		width: 50px;
		height: 50px;
		background-color: red;
		position: absolute;
		right:0px;
		top: -25px;
		background: url(../images/4.png)-250px 0px;
		background-size: 200px
	}
	.player ul{
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 100
	}
	.action li{
		float: left;
		width: 25%;
		height: 60px;
		text-align: center;
		line-height: 60px;
		font-size: 40px;
	}
	.thenamep{
		position: relative;
		overflow: hidden;
	}
	.thename{
		position: absolute;
		left: 0;
		width: 100%;
		display: block;
		bottom: -10px;
		font-size: 14px;
	}
</style>