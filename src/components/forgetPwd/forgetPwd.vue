<template>
	<div class="forget-pwd">
		<div class="input-wrapper">
			<div class="tel-wrapper">
				<span class="text">请输入手机号码：</span>
				<input type="text" class="tel" v-model="tel" ref="tel">
				<img src="./delete.png" class="delete" v-show="tel" @click="empty">
			</div>
			<input type="text" class="code" placeholder="请输入校验码">
			<div class="send-code" :class="{disabled:!canSend}" @click="sendCode" ref="sendCode">{{html}}</div>
		</div>
		<div class="button" @click="next" disabled>下一步</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tel:'',
				html: "发送校验码",
				canSend: true
			}
		},

		methods: {
			empty() {
				this.tel = "";
				this.$refs.tel.focus();
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

		.code {
			width: 9rem;
			margin-top: 1.5rem;
			padding: 0.3rem 0;
			font-size: 0.75rem;
			color: #adadad;
			border-bottom: 1px solid #adadad;
			border-radius: 0;
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