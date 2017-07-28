<template>
	<div>
      <header id="header" class="animated headroom--top">
			<div class="bar  bar-form ">
				<div class="left iconfont"><span @click="direction">&#xe63d;</span></div>
				<div class="title">百度音乐</div>
				<div class="right">
					<span class="btn btn-ucenter url" data-name="ucenter" data-url="/ucenter" data-transition="none"></span>
					<span class="btn log btn-search" data-log="{&quot;pos&quot;:&quot;searchup&quot;,&quot;page&quot;:&quot;home&quot;}"></span>
					<div class="form-search">
						<div class="btn-search-icon"></div>
						<a href="#/search"><input type="search" autocomplete="off" name="query" value="" placeholder="搜歌曲"></a>
					</div>
				</div>
			</div>

			<div class="nav-wrap">
				<ul class="sub-nav">


					<li class="log url" :class="{'on':'recommend'==light}" @click="changeLight('recommend')" data-name="home" data-log="{&quot;pos&quot;:&quot;nav_home&quot;}" data-url="#/recommend"><a href="#/recommend/regebang">推荐</a></li>


					<li class="log url" :class="{'on':'cate'==light}" @click="changeLight('cate')" data-name="songlists" data-log="{&quot;pos&quot;:&quot;nav_songlists&quot;}" data-url="#/cate"><a href="#/cate">分类</a></li>

					<li class="log url" :class="{'on':'bill'==light}" @click="changeLight('bill')" data-name="listcate" data-log="{&quot;pos&quot;:&quot;nav_listcate&quot;}" data-url="#/bill"><a href="#/bill">榜单</a></li>

					<li class="log url" :class="{'on':'artists'==light}" @click="changeLight('artists')" data-name="artists" data-log="{&quot;pos&quot;:&quot;nav_artists&quot;}" data-url="#/artists"><a href="#/artists">歌手</a></li>

					<li class="log url" :class="{'on':'mv'==light}" @click="changeLight('mv')" data-name="mvs" data-log="{&quot;pos&quot;:&quot;nav_mv&quot;}" data-url="#/mv"><a href="#/mv">MV</a></li>

				</ul>
			</div>
		</header>
		<div id="top"><span class="iconfont">&#xe601;</span></div>
	</div>
</template>
<script>
export default{
	computed:{
		light(){
			return this.$store.state.bottomLight
		}
	},
	methods:{
		changeLight(change){
			this.$store.state.bottomLight = change
		},
		direction(){
			return this.$store.state.direction = "right"
		}
	}
}
</script>

<style scoped>
	.left{
		text-align: left;
		line-height: 48px;
	}
	.left span{
		font-size: 23px;	
	}
	#top{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: fixed;
		z-index: 8889;
		top: 500px;
		right: 20px;
		background: rgba(0, 0, 0, .8);
		text-align: center;
		line-height: 50px;
	}
	#top>span{
		font-size: 30px;
		color: #fff;
	}
</style>