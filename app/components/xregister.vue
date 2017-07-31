<template>
	<div>
		<section id="header" class="t_header">
			<a href="#/entry" a-type="back" class="back clearfix"><em></em></a>
			<label n-type="title">登录/注册</label>
			<a n-type="ac" style="display:none" href="/v2/wap/reigster.html" class="account">注册</a>
		</section>
		<div>

		</div>
		<div id="login" style="margin-top: 60px;">

			<!--logo-->
			<div class="t_logo">
				<img src="//static1.qianqian.com/m-tpass/img/logo.png">
			</div>
			<!--/logo-->

			<div class="mask" n-type="mask" a-type="cancel"></div>

			<!--login-->
			<div class="t_login">
				<div class="form-wrapper login-wrapper">
					<div class="input-con ">
						<input class="input-text username" type="text" name="phone" placeholder="请输入用户名" v-model="username">

					</div>
					<div class="input-con verify-text">
						<input class="input-text password" type="password" name="verifyCode" placeholder="请输入密码" v-model="password">

					</div>
					<div class="button-con">
						<button class="submit-btn " n-type="submit" a-type="submit" @click="err()">注册</button>
					</div>
				</div>

				<!-- other-login music -->

				<!-- other-login -->
			</div>
			<!--/login-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				reg: /^[a-zA-Z][a-zA-Z0-9]{5,19}$/,
				regg: /^[\S]{6,20}$/i,			
			}
		},
		computed: {
		},
		methods: {
			err() {
				if(this.reg.test(this.username) && this.regg.test(this.password)) {
					this.$store.state.username = this.username;
					this.$store.state.password = this.password;
					this.$store.dispatch("Register");
				} else {

					return false
				}

			},
		},
		mounted() {
		},
	}
</script>

<style scoped>

</style>