<template>
	<div>
		<ul class="list-category" style="margin-top: 100px;">

			<li class="cate-item  url log post-new" data-log="{&quot;page&quot;:&quot;listcate&quot;,&quot;pos&quot;:&quot;new&quot;} " data-link="" data-url="#songs/new/" data-title="新歌榜" v-for="(n,index) in Bill">	

				<div class="item-content need-active">
					<div class="cate-post">
						<img :org_src="n.pic_big" alt="新歌榜">
						<span class="btn-play ui-icon-play-big" data-list="544901993,541680641,544606704,544607265" data-type="1" data-log="{&quot;page&quot;:&quot;listcate&quot;,&quot;pos&quot;:&quot;allplay&quot;} "></span>
					</div>
					<ul class="cate-hot">

						<li>
							<span class="col-rank rank-1" title="1">1</span>
							<span class="col-title">{{n.album_title}} - {{n.authore}}</span>
						</li>

						<li>
							<span class="col-rank rank-2" title="2">2</span>
							<span class="col-title">桃花诺  - G.E.M.邓紫棋</span>
						</li>

						<li>
							<span class="col-rank rank-3" title="3">3</span>
							<span class="col-title">秘果 - 梁静茹</span>
						</li>

					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			Bill() {
				return this.$store.state.bill
			}
		},
		methods: {
			bill() {
				this.$store.dispatch("setbill")
			}

		},
		mounted() {
			this.bill()
		},
	}
</script>
<style scoped>
	.content .list-category {
		padding: 0 10px 20px;
		margin-top: 50px;
		border-top:1px solid #eee;
     }
</style>