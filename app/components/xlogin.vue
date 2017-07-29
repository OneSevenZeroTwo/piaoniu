<template>
	<div>
		<div>
			<section id="header" class="t_header">
				<a href="#/register" a-type="back" class="back clearfix"><em></em></a>
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
							<input class="input-text username" type="tel" name="phone" placeholder="请输入用户名">
							<span class="pass-clearbtn  check">请输入正确的用户名</span>
						</div>
						<div class="input-con verify-text">
							<input class="input-text password" type="tel" name="verifyCode" placeholder="请输入密码">
							<span class="pass-clearbtn   Check">请输入正确密码</span>
						</div>
						<div class="button-con">
							<button class="submit-btn disabled" n-type="submit" a-type="submit">登录</button>
						</div>
					</div>

					<!-- other-login music -->

					<!-- other-login -->
				</div>
				<!--/login-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			//			Bill() {
			//				return this.$store.state.bill
			//			}
		},
		methods: {
			//			bill() {
			//				this.$store.dispatch("setbill")
			//			}

		},
		mounted() {
//			console.log(window)
			//验证用户名是否符合规则
			$(".username").on('blur', function() {
				var reg = /^[a-zA-Z][a-zA-Z0-9]{5,19}/g;
//				console.log(reg)
				var istrue = reg.test($(this).val());
				if(!istrue) {
					$(this).val('');
					$(this).focus();
					$(this).css("color", "#f00");
					$(".check").show();
				} else {
					$(this).css("color", "#000");
					$(".check").hide();
				}
			})

			$(".password").on('blur', function() {
				var reg = /^[\S]{6,20}$/i;;
				var istrue = reg.test($(this).val());
				if(!istrue) {
					$(this).val('');
					$(this).focus();
					$(this).css("color", "#f00");
					$(".Check").show();
				} else {
					$(this).css("color", "#000");
					$(".Check").hide();
				}
			})

			$(".submit-btn").on("click", function() {
				var username = $(".username").val();
				var password = $(".password").val();
//				console.log(username, password)
				$.ajax({
					type: "post",
					url: "http://localhost:1234/denglu",
					data: {
						user: username,
						pass: password
					},
					success: function(data) {
						if(data == 1) {
							alert('登录成功')			
						localStorage.setItem("username",username)
//						location.href="#recommend";
						} else if(data == 0) {
							alert('输入的信息有误')
							$(".username").val("")
                            $(".password").val("")
						}
					}
				})
			})

		},
	}
</script>

<style>

</style>