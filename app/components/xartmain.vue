<template>
	<div>
		<div class="layout artists layout-current" data-title="">
			<section class="content">

				<div class="artists-header" data-active="0-0-">
					<ul class="nav-tab row area">
						<li class="on col-2 log" data-area="0"><span>全部</span></li>
						<li class="log col-2" data-area="6"><span>华语</span></li>
						<li class="log col-2" data-area="3"><span>欧美</span></li>
						<li class="log col-2" data-area="7"><span>韩国</span></li>
						<li class="log col-2" data-area="60"><span>日本</span></li>
						<li class="log col-2" data-area="5"><span>其他</span></li>
					</ul>
					<ul class="sub-nav-tab row sex">
						<li class="on col-2 log" data-sex="0"><span>全部</span></li>
						<li class="col-2 log" data-sex="1"><span>男</span></li>
						<li class="col-2 log" data-sex="2"><span>女</span></li>
						<li class="col-2 log" data-sex="3"><span>组合</span></li>
					</ul>
					<ul class="abc-nav-tab row">
						<li class="col-6 col-fluid title">热门</li>
						<li class="col-6 col-fluid iconfont icon-word"></li>
					</ul>
				</div>

				<div class="artists-content">
					<ul class="list" id="0-0-">

						<li v-for="a in art" class="artist left url log" data-url="#/artist/2517/">
							<!--<div class="pic">-->
								<!--<img alt="薛之谦" :src="a.imgurl">-->
							<!--</div>-->
							<div class="info">
								<a :href="'#/album/'+a.singerid"><div>{{a.singername}}</div></a>
							</div>
						</li>

						<!--<li class="load-more need-active" @click="loadMore()">查看更多...</li>-->
					</ul>
				</div>
			</section>
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
			art() {
				return this.$store.state.art
			},
		},
		methods: {
			loadMore() {
				this.$store.dispatch("Xart")
			}
		},
		mounted() {
			this.loadMore()
		},
	}
</script>

<style>

</style>