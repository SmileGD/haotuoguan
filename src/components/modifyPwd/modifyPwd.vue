<template>
	<div class="modify-pwd">
		<ul class="info-wrapper">
			<li class="info">
				<div class="text">
					<span class="pwd-text">原密码</span>
					<input type="password" class="pwd">
				</div>
			</li>
			<li class="info">
				<div class="text">
					<span class="pwd-text">新密码</span>
					<input type="password" class="pwd">
				</div>
			</li>
		</ul>
		<div class="comfirm">确定</div>
		<div class="tip">设置成功后，下次可以直接使用过您的手机号和该密码登录账户。</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped lang="less">
	.modify-pwd {
		z-index: 99;
		position: relative;
		min-height: 100%;
		background: #f0f0f0;
	}

	.info-wrapper {
		width: 100%;
		padding: 1rem 0.65rem 0.65rem 0.65rem;
		box-sizing: border-box;

		.info {
			width: 17.5rem;
			height: 2.5rem;
			line-height: 2.5rem;
			font-size: 0;
			background: #fff;
			border-bottom: 0.1rem solid #f0f0f0;

			&:last-child {
				border-bottom: none;
			}

			.text {
				display: inline-block;
				width: 100%;
				padding-left: 0.65rem;
				font-size: 0.9rem;
				color: #333;
				overflow: hidden;

				.pwd-text {
					margin-right: 0.5rem;
					font-weight: 700;
				}

				.pwd {
					width: 12rem;
					outline: none;
				}
			}
		}
	}

	.comfirm {
		width: 17.5rem;
		height: 2.5rem;
		margin: 0 .65rem;
		line-height: 2.5rem;
		text-align: center;
		font-size: .9rem;
		font-weight: 700;
		color: #fff;
		background: #76ccf6;
	}

	.tip {
		padding: 0 0.65rem;
		margin-top: 0.65rem;
		font-size: 0.6rem;
		color: #333;
		text-align: center;
	}
</style>