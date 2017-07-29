<template>
	<div>
		<header id="header" class="animated headroom--top">
			<div class="bar  bar-form ">
				<div class="left"></div>
				<div class="title">我的音乐</div>
				<div class="right">
					<span class="btn btn-ucenter url on" data-name="ucenter" data-url="/ucenter" data-transition="none" style="display: none;"></span>
					<span class="btn log btn-search" data-log="{&quot;pos&quot;:&quot;searchup&quot;,&quot;page&quot;:&quot;home&quot;}"></span>
					<div class="form-search">
						<div class="btn-search-icon"></div>
						<input type="search" autocomplete="off" name="query" value="" placeholder="搜歌曲">
					</div>
				</div>
			</div>

			<div class="nav-wrap">
				<ul class="sub-nav">

					<li class="log url" data-name="home" data-log="{&quot;pos&quot;:&quot;nav_home&quot;}" data-url="/home">推荐</li>

					<li class="log url" data-name="songlists" data-log="{&quot;pos&quot;:&quot;nav_songlists&quot;}" data-url="/songlists">分类</li>

					<li class="log url" data-name="listcate" data-log="{&quot;pos&quot;:&quot;nav_listcate&quot;}" data-url="/listcate">榜单</li>

					<li class="log url" data-name="artists" data-log="{&quot;pos&quot;:&quot;nav_artists&quot;}" data-url="/artists">歌手</li>

					<li class="log url" data-name="mvs" data-log="{&quot;pos&quot;:&quot;nav_mv&quot;}" data-url="/mv">MV</li>

				</ul>
			</div>
		</header>
        <div id="main">
		<div class="layout ucenter layout-current" data-title="我的音乐">
			<section class="content">
				<div class="ucenter-header  no-login" style="width: 100%; height: 85px; line-height: 85px; background-color: #f8f8f8; padding: 0 15px;">
					<div class="avatar">

					</div>

					<a class="btn-login" href="#/register">点击登录</a>
					<a class="btn-logout">注销</a>
				</div>
				<div class="ucenter-content">
					<h3></h3>
					<ul class="nav-tab">
						<li class="on log" data-target=".ucenter-songs"><span></span></li>
						<li class="log" data-target=".ucenter-albums"><span></span></li>
						<li class="log" data-target=".ucenter-songlists"><span></span></li>
						<li class="log" data-target=".ucenter-artists"><span></span></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane ucenter-songs">

							<div class="no-login">
								<p></p>
							</div>

						</div>
						
						
					</div>
				</div>
			</section>
		</div>
	</div>
  </div>	
</template>

<script>
	export default {

	}
</script>

<style scoped>

</style>