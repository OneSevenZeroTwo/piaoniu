<template>
	<div>
		<div class="layout main layout-current" data-title="">
			<section class="content">
				<section class="content">
					<ul class="list">

						<li v-for="m in Mtv" class="mv left arrow log url" data-log="{&quot;page&quot;:&quot;mvlists&quot;,&quot;pos&quot;:&quot;mv&quot;}" data-id="337620259" data-url="/playmv/337620259" data-pro="12">
							<!--<div class="poster">-->
								<!--<img src="http://musicdata.baidu.com/data2/pic/3005a9c12a5e98ecf04dccdf15354bb2/337626094/337626094.jpg" alt="Despacito (Chinese Cover)" class="pic">-->
								<!--<span class="btn-play ui-icon-play-mini"></span>-->
							<!--</div>-->
							<div class="info">
								<p class="name">{{m.geming}}</p>
								<p class="detail">
									<span class="artist">{{m.name}}</span>
								</p>
							</div>
						</li>


						<!--<li class="load-more need-active" @click="loadMore()">查看更多...</li>-->

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