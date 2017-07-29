<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../images/lun01.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="../images/lun02.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="../images/lun03.jpg" alt="" /></div>
				<div class="swiper-slide"><img src="../images/lun04.jpg" alt="" /></div>
				<!--<div class="swiper-slide"><img src="../app/images/lun04.jpg" alt="" ng-click="xian('img/4.jpg')"/></div>-->
				<!--<div class="swiper-slide"><img src="img/5.jpg" alt="" ng-click="xian('img/5.jpg')"/></div>
		<div class="swiper-slide"><img src="img/6.jpg" alt="" ng-click="xian('img/6.jpg')"/></div>-->
				<!--<div class="swiper-slide"><img src="img/7.jpg" alt="" /></div>
		<div class="swiper-slide"><img src="img/8.jpg" alt="" /></div>
		<div class="swiper-slide"><img src="img/9.jpg" alt="" /></div>-->
			</div>
			<!-- Add Pagination -->
			<!--<div class="swiper-pagination"></div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed: {

		},
		methods: {
			banner() {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay: 2000,
					autoplayDisableOnInteraction: false,
					loop: true,
				});
			}
		},
		mounted() {
			this.banner();
		},
	}
</script>

<style scoped>
	.swiper-container {
		margin-top: 80px;
		width: 100%;
		height: 150px;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		margin-right: 0px;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide>img {
		display: inline-block;
		width: 100%;
		height: 100%;
	}
</style>