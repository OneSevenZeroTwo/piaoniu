
<template>
	<div>
		<xheader></xheader>
		<xbanner></xbanner>
		<xrecommend></xrecommend>
		<xche></xche>
		<xshoucang></xshoucang>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xbanner from "../xbanner.vue";
	import xrecommend from "../xrecommend.vue";
	import xche from "../xche.vue";
	import xshoucang from "../xshoucang.vue";
	export default {
		components: {
			xheader,
			xbanner,
			xrecommend,
			xche,
			xshoucang,
		},
	}
</script>