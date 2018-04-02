<template>
	<div class="retrieve">
		<div class="input-wrapper">
			<div class="pwd-wrapper">
				<span class="text">旧密码：</span>
				<input type="password" class="pwd" v-model="oldPwd" ref="oldPwd">
				<img src="./delete.png" class="delete" v-show="oldPwd" @click="emptyOldPwd">
			</div>
			<div class="pwd-wrapper">
				<span class="text">新密码：</span>
				<input type="password" class="pwd"  v-model="newPwd" ref="newPwd">
				<img src="./delete.png" class="delete" v-show="newPwd" @click="emptyNewPwd">
			</div>
			<div class="pwd-wrapper">
				<span class="text">确认新密码：</span>
				<input type="password" class="pwd" v-model="comfirmPwd" ref="comfirmPwd">
				<img src="./delete.png" class="delete" v-show="comfirmPwd" @click="emptyComfirmPwd">
			</div>
		</div>
		<div class="button">提交</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				oldPwd:"",
				newPwd:"",
				comfirmPwd:"",
			}
		},

		methods: {
			emptyOldPwd() {
				this.oldPwd = '';
				this.$refs.oldPwd.focus();
			},
			emptyNewPwd() {
				this.newPwd = '';
				this.$refs.newPwd.focus();
			},
			emptyComfirmPwd() {
				this.comfirmPwd = '';
				this.$refs.comfirmPwd.focus();
			},
		}
	}
</script>

<style scoped lang="less">
	.retrieve {
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

		.pwd-wrapper {
			position: relative;
			width: 100%;
			margin-top: 1.5rem;
			padding: 0.3rem 0;
			font-size: 0.75rem;
			color: #adadad;
			border-bottom: 1px solid #adadad;
			border-radius: 0;
		}

		.pwd {
			width: 10rem;
		}

		.delete {
			position: absolute;
			right: 0;
			bottom: 0.3rem;
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
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