<template>
	<div>
        <div id="main">
		<div class="layout ucenter layout-current" data-title="我的音乐">
			<section class="content">
				<div class="ucenter-header  no-login" style="width: 100%; height: 85px; line-height: 85px; background-color: #f8f8f8; padding: 0 15px;">
					<div class="avatar">

					</div>

					<a class="btn-login"  @click="btn">点击注册</a>
					<!--<a class="btn-login" href="#/login">点击登录</a>-->
				</div>
				<div class="ucenter-content">
					<h3></h3>
					<ul class="nav-tab">
						<li class="on log" data-target=".ucenter-songs"><span></span></li>
						<li class="log" data-target=".ucenter-albums"><span></span></li>
						<li class="log" data-target=".ucenter-songlists"><span></span></li>
						<li class="log" data-target=".ucenter-artists"><span></span></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane ucenter-songs">

							<div class="no-login">
								<p></p>
							</div>

						</div>
						
						
					</div>
				</div>
			</section>
		</div>
	</div>
  </div>	
</template>

<script>
	export default {
           data() {
			return {
				username:"",
				
			}
		},
		computed: {
		},
		methods: {
			btn() {
				console.log(this.username)
				if(this.username){
					location.href = "#login"
				}else{
					location.href = "#register"
				}
			}
			
		},
		mounted() {
			console.log(this.username)
		 this.username = window.localStorage.getItem("username")
		},
	}
</script>

<style scoped>

</style>