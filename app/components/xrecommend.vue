<template>
	<div>
		111
	</div>
</template>

<script>
	export default{
			computed: {
			search() {
				return this.$store.state.count
			},
			news() {
				return this.$store.state.news
//				console.log(news)
			}
		},
		methods: {
			loadMore() {
				this.$store.dispatch("setChange")
			},
		},
		mounted() {
			this.loadMore();
		},
	}
</script>

<style>
</style>