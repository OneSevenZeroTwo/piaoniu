<template>
	<div>
      <header id="header" class="animated headroom--top">
			<div class="bar  bar-form ">
				<div class="left"></div>
				<div class="title">百度音乐</div>
				<div class="right">
					<span class="btn btn-ucenter url" data-name="ucenter" data-url="/ucenter" data-transition="none"></span>
					<span class="btn log btn-search" data-log="{&quot;pos&quot;:&quot;searchup&quot;,&quot;page&quot;:&quot;home&quot;}"></span>
					<div class="form-search">
						<div class="btn-search-icon"></div>
						<input type="search" autocomplete="off" name="query" value="" placeholder="搜歌曲">
					</div>
				</div>
			</div>

			<div class="nav-wrap">
				<ul class="sub-nav">

					<li class="log url on" data-name="home" data-log="{&quot;pos&quot;:&quot;nav_home&quot;}" data-url="/home">推荐</li>

					<li class="log url" data-name="songlists" data-log="{&quot;pos&quot;:&quot;nav_songlists&quot;}" data-url="#/cate">分类</li>

					<li class="log url" data-name="listcate" data-log="{&quot;pos&quot;:&quot;nav_listcate&quot;}" data-url="#/bill">榜单</li>

					<li class="log url" data-name="artists" data-log="{&quot;pos&quot;:&quot;nav_artists&quot;}" data-url="#/artists">歌手</li>

					<li class="log url" data-name="mvs" data-log="{&quot;pos&quot;:&quot;nav_mv&quot;}" data-url="#/mv">MV</li>

				</ul>
			</div>
		</header>
	</div>
</template>
<script>
export default{
	computed:{
	},
	methods:{
		bottomLight(){
			console.log(this.$store.state.bottomLight)
		}	
	}
}
</script>
<style scoped>

</style>