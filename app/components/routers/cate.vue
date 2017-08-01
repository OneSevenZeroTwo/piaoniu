    <template>
	<div>
		<xheader></xheader>
		<xcatemain></xcatemain>
		<xche></xche>
		<xshoucang></xshoucang>
	</div>
</template>
<script>
	import xheader from "../xheader.vue";
	import xcatemain from "../xcatemain.vue";
	import xche from "../xche.vue";
	import xshoucang from "../xshoucang.vue";
	export default {
		components: {
			xheader,
			xcatemain,
			xche,
			xshoucang
		}
	}
</script>