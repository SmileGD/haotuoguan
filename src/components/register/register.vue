<template>
	<div class="register">
		<form class="form">
			<div class="wrapper">
				<span>姓名：</span>
				<input type="text" class="input" v-model="username" ref="username">
				<img src="./delete.png" class="delete" v-show="username" @click="emptyUsername">
			</div>
			<div class="wrapper">
				<span>机构名称：</span>
				<input type="text" class="input" v-model="orgname" ref="orgname">
				<img src="./delete.png" class="delete" v-show="orgname" @click="emptyOrgname">
			</div>
			<div class="wrapper">
				<span>所在地：</span>
				<input type="text" class="input" v-model="addr" ref="addr">
				<img src="./delete.png" class="delete" v-show="addr" @click="emptyAddr">
			</div>
			<div class="wrapper">
				<span>机构地区：</span>
				<input type="text" class="input" v-model="orgaddr" ref="orgaddr">
				<img src="./delete.png" class="delete" v-show="orgaddr" @click="emptyOrgaddr">
			</div>
		</form>
		<div class="button">提交审核</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				username: '',
				orgname: '',
				addr: '',
				orgaddr:'',
				registerData: {}
			}
		},

		methods: {
			emptyUsername() {
				this.username = '';
				this.$refs.username.focus();
			},
			emptyOrgname() {
				this.orgname = '';
				this.$refs.orgname.focus();
			},
			emptyAddr() {
				this.addr = '';
				this.$refs.addr.focus();
			},
			emptyOrgaddr() {
				this.orgaddr = '';
				this.$refs.orgaddr.focus();
			}
		}
	}
</script>

<style scoped lang="less">
	.register {
		z-index: 99;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: #fff;
	}

	.form {
		padding: 0.75rem 1.5rem 0;
	}

	.wrapper {
		position: relative;
		margin-top: 1.5rem;
		padding: 0.3rem 0;
		font-size: 0.75rem;
		color: #adadad;
		border-bottom: 1px solid #adadad;
		border-radius: 0;

		.input {
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