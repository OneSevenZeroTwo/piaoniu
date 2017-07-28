<template>
	<div>
		<div class="detail">
			<div class="pic">
				<img :src="pic" alt="">
			</div>
		</div>
		<div v-for="(n,$index) in backsong"  class="song" @click="plays($index)">
			<span class="t">{{n.songname}}<i class="sq"></i></span>
			<p class="p"><img src="../images/1.gif" alt="" v-if="$index==page">{{n.artistname}}<i class="load"></i></p>
		</div>	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				page:null
			}
		},
		methods:{
			detaillist:function(){
				console.log(666)
				this.$store.state.mysearch = this.$store.state.detailname;
				this.$store.dispatch("getmsg");
			},
			plays:function(index){
				this.page = index
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
		margin-top: 100px
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
</style>