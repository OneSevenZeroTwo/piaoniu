<template>
	<div>
		<div id="page-group">
			<div id="main">

				<div class="layout home layout-current">
					<section class="content">

						<div class="mod-tj">
							<div class="hd">今日推荐</div>
							<div class="container">
								<div class="songlist">

									<div v-for="n in news" class="card url song-541853982 normal log" data-sid="541853982" data-url="/song/541853982" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
										<div class="poster">
											<img :src="n.pic_small" alt="">
											<span class="btn-play ui-icon-play url song- normal" data-sid="541853982" data-url="/song/541853982"></span>
										</div>
										<div class="info">
											<div class="name">{{n.title}}</div>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="mod-albums">
							<div class="hd log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;albums&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#/albums">
								<h2>新歌速递</h2>
								<div>
									<a href="#/gengduoxg">更多</a>
								</div>
							</div>
							<div class="container">
								<div class="gallery">
									<div class="scroller">
										<!--<div class="swiper-container">
										<div class="swiper-wrapper">-->
										<!--<div class="swiper-slide">-->
										<div v-for="a in arrs" class="card url" data-url="#/album/544527746/" data-id="544527746">
											<div class="album">
												<img :src="a.pic_small">
												<span m-on="playall" class="btn-play ui-icon-play-big"></span>
												<div class="name">{{a.title}}</div>
												<div class="author">{{a.artist_name}}</div>
											</div>
										</div>
										<!--</div>-->
										<!--</div>
									</div>-->
									</div>
								</div>
							</div>
						</div>

						<div class="mod-misad"></div>
						<div class="mod-fm">
							<img m-on="playall" src="//static4.qianqian.com/web/st/img/app/home/mod-sst.jpg" alt="">
						</div>

						<div class="mod-lists ">
							<div class="log url hd" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;listcate&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#listcate">
								<h2>音乐榜单</h2>

								<div>
									<a href="#/bill">更多</a>
								</div>
							</div>
							<div class="bars">
								<div v-for="(g,index) in gedan" class="bar" :class="{'on':page==index}" @click="changeTab(index)">
									<a :href="g.lu">{{g.name}}</a><i></i><span class="gap-line"> </span></div>
							</div>
							<div class="board panels">
								<router-view></router-view>
								<div class="more-songs url" data-url="#/songs/hot/">
									查看该榜单&gt;
								</div>
							</div>
						</div>

						<div class="mod-songlists">
							<div class="hd  log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;songlist&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#/songlists">
								<h2>热门歌单</h2>

								<div>
									<a href="#/cate">更多</a>
								</div>
							</div>
							<div class="container">
								<div class="wrapper">

									<div v-for="r in re" class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:1}" data-url="#/songlist/365541765/" data-title="让你元气满满的欢脱节奏">

										<div class="card-slider">
											<div class="poster" data-id="365541765">
												<img :src="r.pic_small" alt="让你元气满满的欢脱节奏">
											</div>
										</div>
										<div class="info">
											<div class="name">{{r.album_title}}</div>
											<div class="detail">
												<div class="tags">
												</div>
												<div class="ting-num"><i></i><span></span></div>
											</div>
										</div>
										<div class="icon-arr">

										</div>
									</div>

								</div>
							</div>
						</div>

						<div class="mod-mvs">
							<div class="hd log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmvmore_wap&quot;}" data-url="#/mv">
								<h2>推荐MV</h2>

								<div>
									<a href="#/mv">更多</a>
								</div>
							</div>
							<div class="container">
								<div class="wrapper">

									<div v-for="t in tui" class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmv_wap&quot;,&quot;sub&quot;:1}" data-url="/playmv/337620259" data-title="Despacito (Chinese Cover)">

										<div class="card-slider">
											<div class="poster" data-id="337620259">
												<img :src="t.pic_big" alt="Despacito (Chinese Cover)">
											</div>
										</div>
										<div class="info">
											<div class="name">{{t.album_title}}</div>
											<div class="artist">{{t.title}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="mod-misshop"></div>

						<!---->
					</section>
					<footer id="footer" class="c_bb_1">
						<a class="log url" data-log="{&quot;page&quot;:&quot;bottom&quot;,&quot;pos&quot;:&quot;feedback&quot;}" href="#/feedback">意见反馈</a>
					</footer>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gedan: [
					{ name: "热歌榜", lu: "#/recommend/regebang" },
					{ name: "新歌榜", lu: "#/recommend/xingebang" },
					{ name: "King榜", lu: "#/recommend/kingbang" }
				],
				page: 0,
				scroll: "",
			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			//推荐
			news() {
				return this.$store.state.news
			},
			//新歌
			arrs() {
				return this.$store.state.arrs
			},
			//热歌
			re() {
				return this.$store.state.re
			},
			//推荐mv
			tui() {
				return this.$store.state.tui
			}
		},
		methods: {
			loadMore() {
				this.$store.dispatch("setChange")
			},
			changeTab: function(index) {
				this.page = index;
			},
		},
		mounted() {
			this.loadMore();
			//			this.swiper();
		},
	}
</script>

<style scoped>
	.mod-mvs .poster>img {
		display: inline-block;
		width: 100%;
		height: 80.44px;
	}
	
	.card {
		width: 103.22px;
	}
	
	html,
	body {
		position: relative;
		height: 100%;
	}
	
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}
	
	#main {
		margin-top: 0px;
	}
	
	.swiper-container {
		width: 320px;
		height: 100%;
	}
	
	.swiper-slide {
		width: 30%;
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
</style>