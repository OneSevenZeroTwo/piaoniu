<template>
	<div>
		<div id="search" class="page search"  >
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
			<div class="ui-suggestion" style="height: 640px;">
				<div class="hot-sug clearfix" style="margin-bottom: 10px;">
					<span class="item" v-for="n in name" @click="dian(n)">{{n}}</span>
				</div>
				<div class="ui-suggestion-content"> </div>
				<div class="ui-suggestion-button">
					<div class="ui-suggestion-clear">清除历史记录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				song : "",
				issearch : true,
				name:["薛之谦","孙盛希","鹿晗","五月天","王菲","梁静茹","莫文蔚","李宗盛","陈梓童","李玉刚","张杰"]
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
			dian(n){
				this.song = n;
				if(this.song.length>0){
					this.issearch = false
				}else{
					this.issearch = true
				}
				console.log(this.song.length);
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

<style>
	#search{
		display: block;
		/*position: fixed;*/
		/*z-index: 1000;*/
	}
</style>