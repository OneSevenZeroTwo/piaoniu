<template>
    <div>
		<xheader></xheader>
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
		<xfoot></xfoot>
	</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xfoot from "../xfoot.vue";
	export default {
		components:{
			xheader, 
			xfoot
		}
	}
</script>

<style>
</style>