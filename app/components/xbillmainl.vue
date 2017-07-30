<template>
	<div>
		<ul class="list-category" style="margin-top: 100px;">

			<li class="cate-item  url log post-new" data-log="{&quot;page&quot;:&quot;listcate&quot;,&quot;pos&quot;:&quot;new&quot;} " data-link="" data-url="#songs/new/" data-title="新歌榜" v-for="n in Bill">	

				<div class="item-content need-active">
					<div class="cate-post">
						<img :src="n.imgurl|getpic" alt="新歌榜">
						<span class="btn-play ui-icon-play-big" data-list="544901993,541680641,544606704,544607265" data-type="1" data-log="{&quot;page&quot;:&quot;listcate&quot;,&quot;pos&quot;:&quot;allplay&quot;} "></span>
					</div>
					<ul class="cate-hot">

						<li v-for="(songs,$index) in n.songs" @click="play(songs.hash)">
							<span class="col-rank rank-1" title="1">{{$index+1}}</span>
							<span class="col-title">{{songs.filename}}</span>
						</li>

					</ul>
				</div>
			</li>
		</ul>
		<audio autoplay="autoplay" :src="playsong" alt="" v-if="stop"></audio>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				stop:false
			}
		},
		filters:{
			getpic(input){
				var arr = input.split("{size}");
					
				return arr.join('')
			}
		},
		computed: {
			Bill() {
				return this.$store.state.bill
			},
			playsong(){
				return this.$store.state.hashsong
			}
		},
		methods: {
			bill() {
				this.$store.dispatch("setbill")
			},
			play(hash){
				console.log(hash)
				this.$store.state.hash = hash;
				this.$store.dispatch("playthesong");
				this.stop = true;
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