
<template>
	<div>
		<xheader></xheader>
		<xbanner></xbanner>
		<xrecommend></xrecommend>
		<xche></xche>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xbanner from "../xbanner.vue";
	import xrecommend from "../xrecommend.vue";
	import xche from "../xche.vue";
	export default {
		components: {
			xheader,
			xbanner,
			xrecommend,
			xche,
		},
	}
</script>