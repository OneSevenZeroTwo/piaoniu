<template>
	<div style="margin-top:100px;">
		<div class="layout main layout-current" data-title="">
			<section class="content">
				<section class="content">
					<ul class="list">
						<li class="mv left arrow log url" data-log="{&quot;page&quot;:&quot;mvlists&quot;,&quot;pos&quot;:&quot;mv&quot;}" data-id="337620348" data-url="/playmv/337620348" data-pro="12" v-for="(n,index) in Mtv">
							<!--<div class="poster">
								<img :src="n.pic_big" alt="CACTUS" class="pic">
								<span class="btn-play ui-icon-play-mini"></span>
							</div>-->
							<div class="info">
								<p class="name">{{n.name}}</p>
								<p class="detail">
									<span class="artist">{{n.geming}}</span>
								</p>
							</div>
						</li>
						<li class="load-more need-active" @click="loadMore()">查看更多...</li>
					</ul>
				</section>
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
			Mtv(){
				return this.$store.state.mtv
			}
		},
		methods: {
			loadMore() {
				this.$store.dispatch("Mtv")
			}

		},
		mounted() {
			this.loadMore()
		},
	}
</script>

<style scoped>
	.layout{
		margin-top: 80px;
	}
	.list{
		margin-bottom: 57px;
	}
</style>