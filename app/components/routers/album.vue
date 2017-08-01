<template>
	<div>
	    <xheader></xheader>
		<xalbum></xalbum>
		<xfoot></xfoot>
	</div>
</template>
<script>
	import xalbum from "../xalbum.vue";
	import xheader from "../xheader.vue";
	import xfoot from "../xfoot.vue";
	export default {
			components:{
				xheader,
				xalbum,
				xfoot
			}
	}
</script>

<style>
</style>