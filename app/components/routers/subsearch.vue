<template>
	<div>
		<div>
			<form id="se_form" action="/" method="GET">
				<div class="search-input">
					<div class="input-wrap">
						<div class="search-query-button"><span></span></div>
						<input type="search" autocomplete="off" name="query" v-model="song" value="" placeholder="歌名、歌词、歌手、专辑" @keyup="showsearch()" >
						<div class="search-cancel-button" style="display: none"><span></span></div>
						<div class="search-button">
							<a href="#/recommend" v-if="issearch">取消</a>
							<a href="#/subsearch" v-if="!issearch" @click="search()">搜索</a>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div v-for="(n,$index) in backlist"  class="song">
			<div @click="playsong($index)">
				<span class="t">{{n.songname}}<i class="sq" background-size="10px"></i></span>
				<p class="b"><img src="../../images/1.gif" alt="" v-if="$index==page">{{n.artistname}}<i class="load"></i></p>
			</div>
		</div>
	</div>

</template>
<script>
	export default{
		data(){
			return{
				song : "",
				issearch : true,
				page:null
			}
		},
		computed:{
			backlist(){
				return this.$store.state.backsong
			}
		},
		methods:{
			showsearch() {
				if(this.song.length>0){
					this.issearch = false
				}else{
					this.issearch = true
				}
			},
			search(){
				this.$store.state.mysearch = this.song;
				this.$store.dispatch("getmsg");
			},
			playsong(index){
				this.page = index
			}
		},
		mounted(){
			console.log(this.$store.state.backsong)
						if(this.song.length>0){
				this.issearch = false
			}
		}
	}
</script>
<style scoped>
.song{
	border-top: 1px solid pink;
	padding:14px;
}
.song .b{
	font-size: 12px;
	color:#999;
	position: relative;
}
.t{
	position: relative;
}
.song .b img{
	height: 16px;
	margin-right: 16px;
}
.sq{
	/*background-size: 12px 12px;*/
	display: block;
	width: 50px;
	height: 50px;
	position: absolute;
	right: -50px;
	top: -15px;
	background: url(../../images/4.png)-370px -135px
}
.load{
	/*background-position: 12px 12px;*/
	display: block;
	width: 50px;
	height: 50px;
	background-color: red;
	position: absolute;
	right:0px;
	top: -25px;
	background: url(../../images/4.png)-215px -263px
}
</style>