<template>
	<div class="personal">
		<ul class="info-wrapper">
			<li class="info">
				<img :src="user" class="icon">
				<div class="text">
					<input type="text" value="龙玲燕" class="input">
				</div>
			</li>
			<li class="info">
				<img :src="gender" class="icon">
				<div class="text">
					<select>
						<option value="男" class="option">男</option>
						<option value="女" class="option">女</option>
					</select>
				</div>
			</li>
		</ul>
		<div class="comfirm">确定</div>
	</div>
</template>

<script type="text/javascript">
import user from './ic_name.png';
import gender from './ic_gender.png';

	export default {
		data(){
			return {
				user: user,
				gender: gender
			}
		}
	}
</script>

<style scoped lang="less">
	.personal {
		width: 100%;
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
			overflow: hidden;

			&:last-child {
				border-bottom: none;
			}

			.icon {
				width: 1.55rem;
				height: 1.55rem;
				margin: 0.5rem 0.65rem;
				vertical-align: top;
				border-radius: 50%;
			}

			.text {
				display: inline-block;
				width: 12rem;
				font-size: 0.9rem; 
				color: #333;
				overflow: hidden;
			}

			.input {
				width: 12rem;
			}
		}
	}

	select {
		/*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
		border: none;

		// 清除点击时的高亮边框
		outline: none;

		/*很关键：将默认的select选择框样式清除*/
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;

		font-size: 0.9rem;
		color: #333;
	}

/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
	select::-ms-expand {
		display: none; 
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
</style>