<template>
	<div>
		<xheader></xheader>
		<xmvmain></xmvmain>
		<xfoot></xfoot>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xmvmain from "../xmvmain.vue";
	import xfoot from "../xfoot.vue";
	export default {
		components: {
			xheader,
			xmvmain,
			xfoot
		}
	}
</script>