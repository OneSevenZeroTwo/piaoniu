<template>
	    <div>
			<xheader></xheader>
			<xentry></xentry>
			<xfoot></xfoot>
		</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xentry from "../xentry.vue";
	import xfoot from "../xfoot.vue";
	export default {
		components:{
			xheader, 
			xentry,
			xfoot
		}
	}
</script>

<style>
</style>