<template>
	<div class="forget-pwd">
		<div class="input-wrapper">
			<div class="tel-wrapper">
				<span class="text">请输入手机号码：</span>
				<input type="text" class="tel" v-model="tel" ref="tel">
				<img src="./delete.png" class="delete" v-show="tel" @click="emptyTel">
			</div>
			<div class="code-wrapper">
				<input type="text" class="code" v-model="code" placeholder="请输入校验码" ref="code">
				<img src="./delete.png" class="delete-code" v-show="code" @click="emptyCode">
				<div class="send-code" :class="{disabled:!canSend}" @click="sendCode" ref="sendCode">{{html}}</div>
			</div>
		</div>
		<div class="button" @click="next">下一步</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tel: '',
				code: '',
				loginData: {},
				html: "发送校验码",
				canSend: true
			}
		},

		methods: {
			emptyTel() {
				this.tel = "";
				this.$refs.tel.focus();
			},
			emptyCode() {
				this.code = "";
				this.$refs.code.focus();
			},
			sendCode(){
				if(this.canSend) {
					this.canSend = false;
					let i = 59;
					// 为了点击之后没有一秒的延迟 需先在定时器外边改变html的值
					this.html = "重新发送("+(i < 10 ? '0'+i: i) +"S)";
					let countDown = setInterval(() => {
						i--;
						this.html = "重新发送("+(i < 10 ? '0'+i: i) +"S)";
						if(i == 0) {
							this.html = "发送验证码";
							clearInterval(countDown);
							this.canSend = true;
						}
					},1000);
				}
			},
			next() {
				this.$router.push({
					name: 'retrieve'
				})
			},
			login() {
				if(!this.tel || !this.code) {
					alert('请输入手机号码和登录码');
					return;
				}
				this.loginData.tel = this.tel;
				this.loginData.code = this.code;
				console.log(this.loginData);
			}
		}
	}
</script>

<style scoped lang="less">
	.forget-pwd {
		z-index: 99;
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #fff;
	}

	.input-wrapper {
		padding: 0.75rem 1.5rem 0;

		.tel-wrapper {
			position: relative;
			margin-top: 1.5rem;
			padding: 0.3rem 0;
			font-size: 0.75rem;
			color: #adadad;
			border-bottom: 1px solid #adadad;
			border-radius: 0;
		}

		.tel {
			width: 8rem;
		}


		.delete {
			position: absolute;
			right: 0;
			bottom: 0.3rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
		}

		.code-wrapper {
			position: relative;
		}

		.code {
			width: 7rem;
			margin-top: 1.5rem;
			padding: 0.3rem 2rem 0.3rem 0;
			font-size: 0.75rem;
			color: #adadad;
			border-bottom: 1px solid #adadad;
			border-radius: 0;

			&::placeholder {
				color: #adadad;
			}
		}

		.delete-code {
			position: absolute;
			left: 7.5rem;
			bottom: 0.8rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
		}

		.send-code {
			float: right;
			width: 6rem;
			height: 1.5rem;
			margin-top: 1.5rem;
			line-height: 1.5rem;
			text-align: center;
			font-size: 0.75rem;
			color: #fff;
			background: #ffcd31;
			border-radius: 0.4rem;
		}

		.disabled {
			background: #adadad;
		}
	}

	.button {
		height: 2.0rem;
		margin: 1.5rem 1.5rem 0;
		line-height: 2.0rem;
		text-align: center;
		font-size: 0.75rem;
		color: #ffcd31;
		background: #333;
		border-radius: 1rem;
	}
</style>