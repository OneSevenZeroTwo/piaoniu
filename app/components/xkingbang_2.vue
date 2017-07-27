<template>
	<div>
		<div v-for="k in king" class="panel hotsongs on" data-key="listcate_hotsong">

			<ul class="list">

				<li class="song url  song-276867440 normal" data-sid="276867440" data-url="/song/276867440">
					<div class="poster">
						<img :src="k.pic_small" alt="刚好遇见你">
						<!--<i>01</i>-->
					</div>

					<div class="icon-trend icon-trend-zero"></div>

					<span class="icon-play-state"></span>
					<div class="info">
						<div class="name">
							{{k.album_title}}
							<span class="icon-q icon-sq"></span>

						</div>
						<div class="author">{{k.artist_name}}</div>
					</div>

					<div class="download iconfont icon-download need-active"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			//热歌榜
			king() {
				return this.$store.state.king
			},
		},
		methods: {
			loadMore() {
				this.$store.dispatch("setChange")
			},
		},
		mounted() {
			this.loadMore();
		},
	}
</script>

<style>

</style>