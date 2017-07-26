<template>
	<div>
		<xheader></xheader>
		<xartmain></xartmain>
		<xfoot></xfoot>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xartmain from "../xartmain.vue";
	import xfoot from "../xfoot.vue";
	export default {
		components: {
			xheader,
			xartmain,
			xfoot
		}
	}
</script>