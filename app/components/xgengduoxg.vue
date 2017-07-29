<template>
	<div>
		<div class="layout main layout-current" data-title="">
			<section class="content">
				<div class="albums list">
					<div class="wrapper">
						<div class="even ">

							<div v-for="x01 in xg01" class="info url log" data-url="#/album/548836363/">
								<div class="poster">
									<img :src="x01.pic_big" alt="不如笑归去">
									<span m-on="playall" class="btn-play ui-icon-play" data-aid="548836363"></span>
								</div>
								<div class="text-wrap">
									<div class="title">{{x01.artist_name}}</div>
									<div class="author">{{x01.title}}</div>
								</div>
							</div>

						</div>
						<div class="odd">

							<div v-for="x02 in xg02" class="info url log" data-url="#/album/548836363/">
								<div class="poster">
									<img :src="x02.pic_big" alt="不如笑归去">
									<span m-on="playall" class="btn-play ui-icon-play" data-aid="548836363"></span>
								</div>
								<div class="text-wrap">
									<div class="title">{{x02.artist_name}}</div>
									<div class="author">{{x02.title}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>
			<footer id="footer" class="c_bb_1">
				<a class="log" data-log="{&quot;page&quot;:&quot;bottom&quot;,&quot;pos&quot;:&quot;home&quot;}" href="/">首页</a>
				<a class="log url" data-log="{&quot;page&quot;:&quot;bottom&quot;,&quot;pos&quot;:&quot;feedback&quot;}" href="#/feedback">意见反馈</a>
			</footer>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			//更多新歌
			xg01() {
				return this.$store.state.xg01
			},
			xg02() {
				return this.$store.state.xg02
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

<style scoped>
	.albums .wrapper {
		padding-top: 80px;
	}
</style>