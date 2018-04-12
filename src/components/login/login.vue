<template>
	<div class="login" ref="login">
		<div class="container">
			<div class="logo-wrapper">
				<div class="logo-content">
					<img src="./logo.png" class="logo">
				</div>
			</div>
			<div class="login-wrapper">
				<div class="input-content">
					<img src="./user.png" class="icon">
					<input type="text" placeholder="请输入用户名" class="input" v-model="username" ref="user">
					<img src="./delete.png" class="delete" v-show="username" @click="emptyUser">
				</div>
				<div class="input-content">
					<img src="./password.png" class="icon">
					<input type="password" placeholder="请输入密码" class="input" v-model="pwd" ref="pwd">
					<img src="./delete.png" class="delete" v-show="pwd" @click="emptyPwd">
				</div>
				<div class="content">
					<div class="code-login" @click="codeLogin">验证码登录</div>
					<div class="forget" @click="retrievePwd">忘记密码</div>
				</div>
				<div class="button-wrapper">
					<div class="button register" @click="register">注册</div>
					<div class="button login-button" @click="login">登录</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">

export default {
	data() {
		return {
			username: '',
			pwd: '',
			loginData: {},
			WIN_HEIGHT: document.documentElement.clientHeight
		}
	},

	methods: {
		emptyUser() {
			this.username = "";
			this.$refs.user.focus();
		},
		emptyPwd() {
			this.pwd = "";
			this.$refs.pwd.focus();
		},
		codeLogin() {
			this.$router.push({
				name:'code_login'
			})
		},
		retrievePwd() {
			this.$router.push({
				name: 'forget_pwd'
			})
		},
		login() {
			if(!this.username || !this.pwd) {
				alert('请输入用户名和密码');
				return;
			}
			this.loginData.username = this.username;
			this.loginData.pwd = this.pwd;
			console.log(this.loginData);
		},
		register() {
			this.$router.push({
				name:'register'
			})
		}
	}
}

</script>
<style scoped lang="less">
.login {
	z-index: 99;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: #fff;
}

.container {
	position: relative;
}

.logo-wrapper {
	position: relative;
	width: 100%;
	height: 12.5rem;
	background: url('./logo-bg.png') no-repeat;
	background-size: 100% 100%;

	.logo-content {
		position: absolute;
		left: 50%;
		top: 7.3rem;
		transform: translateX(-50%);
		width: 5.25rem;
		height: 5.25rem;
		text-align: center;
		background: #fff;
		border-radius: 50%;
	}

	.logo {
		width: 3.4rem;
		margin: 0.45rem 0;
	}
}

.login-wrapper {
	padding: 3.4rem 3.35rem 0;
	box-sizing: border-box;
	background: #fff;

	.input-content {
		position: relative;
		width: 100%;
		padding: 0.35rem 0 0.35rem 0.2rem;
		margin-top: 1.1rem;
		box-sizing: border-box;
		border-bottom: 1px solid #c1c1c1;

		.icon {
			width: 1.0rem;
			height: 1.0rem;
			margin-right: 1.0rem;
			vertical-align: bottom;
		}

		.input {
			width: 8rem;
			font-size: 0.8rem;
			color: #333;
			background: transparent;
		}

		.delete {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
		}
	}

	.content {
		width: 100%;
		margin: 1.25rem 0 1.75rem;
		font-size: 0.7rem;
		color: #d0d0d0;

		.code-login {
			display: inline-block;
		}

		.forget {
			float: right;
		}
	}
}

.button-wrapper {
	position: relative;
	width: 100%;

	.button {
		display: inline-block;
		width: 5rem;
		height: 1.9rem;
		line-height: 1.9rem;
		font-size: 0.8rem;
		text-align: center;
		border-radius: 1rem;
	}

	.register {
		color: #333;
		border: 1px solid #333;
	}

	.login-button {
		position: absolute;
		right: 0;
		top: 0;
		color: #fff;
		background: #ffcd31;
		border: 1px solid #ffcd31;
	}
}

</style>
