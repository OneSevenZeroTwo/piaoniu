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

						<li class="artist left url log" data-url="#/artist/2517/">
							<div class="pic">
								<img alt="薛之谦" src="http://musicdata.baidu.com/data2/pic/246669444/246669444.jpg@s_0,w_120" org_src="http://musicdata.baidu.com/data2/pic/246669444/246669444.jpg@s_0,w_120">
							</div>
							<div class="info">
								<div>薛之谦</div>
							</div>
						</li>

						<li class="load-more need-active" @click="loadMore()">查看更多...</li>
					</ul>
				</div>

				<div class="artists-abc-model">
					<div class="model-container">
						<h3>歌手首字母</h3>
						<div class="model-content">
							<ul class="row">
								<li class="on col"><span>热门</span></li>
								<li class="col"><span>A</span></li>
								<li class="col"><span>B</span></li>
								<li class="col"><span>C</span></li>
								<li class="col"><span>D</span></li>
								<li class="col"><span>E</span></li>
								<li class="col"><span>F</span></li>
							</ul>
							<ul class="row">
								<li class="col"><span>G</span></li>
								<li class="col"><span>H</span></li>
								<li class="col"><span>I</span></li>
								<li class="col"><span>J</span></li>
								<li class="col"><span>K</span></li>
								<li class="col"><span>L</span></li>
								<li class="col"><span>M</span></li>
							</ul>
							<ul class="row">
								<li class="col"><span>N</span></li>
								<li class="col"><span>O</span></li>
								<li class="col"><span>P</span></li>
								<li class="col"><span>Q</span></li>
								<li class="col"><span>R</span></li>
								<li class="col"><span>S</span></li>
								<li class="col"><span>T</span></li>
							</ul>
							<ul class="row">
								<li class="col"><span>U</span></li>
								<li class="col"><span>V</span></li>
								<li class="col"><span>W</span></li>
								<li class="col"><span>X</span></li>
								<li class="col"><span>Y</span></li>
								<li class="col"><span>Z</span></li>
								<li class="col"><span>其他</span></li>
							</ul>
						</div>
						<a class="btn-close">关闭</a>
					</div>
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