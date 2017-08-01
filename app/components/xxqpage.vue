<template>
	<div id="page-group">
		<div class="page page-current" id="layoutSong">
			<div class="mod-song-header grid">
				<section class="grid-section">
					<div class="row">
						<i class="col-1 iconfont icon-home" @click="back()"></i>
						<div class="col-10 header-content">
							<p class="title">下雨了</p>
							<p class="author">薛之谦</p>
						</div>
						<span class="iconfont col-1 icon-search log"></span>
					</div>
				</section>
			</div>

			<div class="mod-song-info grid">
				<section class="grid-section">
					<div class="container info-inner" style="height: 302px;">
						<div style="display: none" class="lyric-hidden">
						</div>
						<div class="v-scroller frontside animated">
							<div class="album-panel" style="padding-top:80px">
								<img alt="" :src="playsongpic|getsize">
							</div>
							<div class="lrc-content">
								
							</div>
						</div>

						<div class="v-scroller backside animated">
							<div class="lrc-content">
							</div>
						</div>
					</div>

					<ul class="action row">
						<li class="favor iconfont icon-favor  col-2 "></li>
						<li class="iconfont icon-download col-2 col-offset-8 "></li>
					</ul>
				</section>
			</div>

			<div class="mod-song-control grid">
				<div class="progress-wrapper">
					<span class="ticker cur">04:36</span>
					<div class="progress">
						<div class="bar noUi-target noUi-ltr noUi-horizontal noUi-connect">
							<div class="noUi-base">
								<div class="noUi-origin noUi-background noUi-stacking" style="left: 90.2738%;">
									<div class="noUi-handle noUi-handle-lower"></div>
								</div>
							</div>
						</div>
					</div>
					<span class="duration">05:05</span>
				</div>

				<ul class="action row" style="list-style: none;display: flex; align-items: center;justify-content: space-between">
					<li class="iconfont icon-loop col-3 iconmode"></li>
					<li class="col-6 iconcenter">
						<div class="iconfont icon-prev"></div>
						<div class="iconfont icon-play-pause icon-stop"></div>
						<div class="iconfont icon-next"></div>
						<div class="play-loading" style="display: none;"></div>
					</li>
					<li class="iconfont icon-list col-3" style="text-align: right"></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			back(){
				window.history.back(-1);
			},
		},
		computed:{
			playsongpic(){
				return this.$store.state.playsongpic
			},
		},
		filters:{
			getsize(input){
				var arr = input.split("{size}");
				arr.splice(1,0,400);
				return arr.join("")
			},
		}
	}
</script>
<style>

</style>