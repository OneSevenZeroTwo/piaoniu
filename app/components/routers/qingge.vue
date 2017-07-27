<template>
	<div class="liuxing">
		<div class="title">
			<p>流行</p>
			<span>最热</span>
			<span>最新</span>
		</div>
		<div class="list" v-for="n in liuxing">
			<img :src="n.pic_big" alt="">
			<p>{{n.author}}</p>
			<p>{{n.info}}</p>
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
				this.$store.state.kind = 23,
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
	width: 50%;
	float: left;
	padding: 3%;
	border:1px solid #fff;
}
</style>