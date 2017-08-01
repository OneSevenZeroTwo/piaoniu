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

						<li v-for="(songs,$index) in n.songs" @click="play(songs.hash)" style="line-height: 34px; height: 34px;">
							<span class="col-rank rank-1" title="1">{{$index+1}}</span>
							<span class="keepplay">{{songs.filename|nomore}}</span>
						</li>

					</ul>
				</div>
			</li>
		</ul>
		<div id="zhe" v-show="zheShow">
			<div class="iconfont fuhao">
				&#xe509;
			</div>
		</div>
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
			},
			nomore(input){
				if(input.length>=12){
					return input.substring(0,12)+"..."
				}else{
					return input
				}
			}
		},
		computed: {
			Bill() {
				return this.$store.state.bill
			},
			playsong(){
				return this.$store.state.hashsong
			},
			zheShow() {
				return this.$store.state.zheShow
			},
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
     #zhe{
     	width: 100%;
     	height: 488px;
     	background-color: #fff;
     	position: fixed;
     	top: 80px;
     	left: 0;
     	z-index: 1;
     }
     #zhe .fuhao{
     	position: absolute;
     	top: 200px;
     	left: 145px;
     	font-size: 40px;
     }
</style>