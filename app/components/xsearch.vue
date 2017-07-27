<template>
	<div>
		<div id="search" class="page search" v-show="isshow" >
			<form id="se_form" action="/" method="GET">
				<div class="search-input">
					<div class="input-wrap">
						<div class="search-query-button"><span></span></div>
						<input type="search" autocomplete="off" name="query" value="" placeholder="歌名、歌词、歌手、专辑">
						<div class="search-cancel-button" style="display: none"><span></span></div>
						<div class="search-button">取消</div>
					</div>
				</div>
			</form>
			<div class="ui-suggestion" style="height: 640px;">
				<div class="hot-sug clearfix" style="margin-bottom: 10px;"><span class="item">薛之谦</span><span class="item">孙盛希《Between》</span><span class="item">林忆莲《我不能忘记你》</span><span class="item">五月天</span><span class="item">梁静茹</span><span class="item">莫文蔚</span><span class="item">李宗盛</span><span class="item">陈梓童</span><span class="item">刚好遇见你</span><span class="item">张杰</span></div>
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
		computed: {
//			search() {
//				return this.$store.state.count
//			},
			isshow() {
				return this.$store.state.isshow;
				console.log(this.$store.state.isshow)
			}
		},
		methods: {
//			loadMore() {
//				this.$store.dispatch("setChange")
//			},
		},
//		mounted() {
//			this.isshow();
//		},
	}
</script>

<style>
	#search{
		display: block;
		position: fixed;
		z-index: 1000;
	}
</style>