<template>
	<div class="liuxing">
		<div class="title">
			<p>流行</p>
			<span>最热</span>
			<span>最新</span>
		</div>
		<div class="list" v-for="n in liuxing">
			<img :src="n.pic_big" alt="">
			<i></i>
			<p>{{n.author}}</p>
			<p>{{n.album_title}}</p>
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			liuxing(){
				return this.$store.state.liuxing
			}
		},
		methods:{
			setliuxing(){
				this.$store.state.kind = 16,
				this.$store.dispatch("setliuxing")
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
	border:1px solid pink;
	width: 50px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	float: right;
}
.list{
	height: 190px;
	width: 50%;
	float: left;
	padding: 3%;
	border:1px solid #fff;
	position: relative;
}
.list i{
	display: block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: red;
	position:absolute;
	right: 18px;
	top: 5rem;
	background: url(//static0.qianqian.com/web/st/img/sprite/ui-list-0e4.png)-137px -114px;
}
.list p{
	font-size: 10px;
}
</style>