<template>
	<transition name='slide' mode='out-in'>
		<div class="personal slide-to-left">
			<ul class="info-wrapper">
				<li class="info">
					<img :src="user_icon" class="icon">
					<div class="text">
						<input type="text" :value="user.name" class="input">
					</div>
				</li>
				<li class="info">
					<img :src="gender_icon" class="icon">
					<div class="text">
						<select>
							<option :value="user.gender" class="option">{{user.gender}}</option>
							<option value="男" class="option" v-if="user.gender == '女'">男</option>
							<option value="女" class="option" v-else>女</option>
						</select>
					</div>
				</li>
			</ul>
			<div class="comfirm">确定</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
import user_icon from './ic_name.png';
import gender_icon from './ic_gender.png';

const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	data() {
		return {
			user_icon: user_icon,
			gender_icon: gender_icon,
			user: {}
		}
	},

	created() {
		this.$http.post(URL + '/weixin_api/get_user_info').then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.user = response.data;
			}
		})
	}
}

</script>
<style scoped lang="less">
.personal {
	z-index: 99;
	position: relative;
	min-height: 100%;
	background: #f0f0f0;
}

.slide-to-left {
	&.slide-enter-active,
	&.slide-leave-active {
		transition: all 0.3s;
		transform: translateX(0);
	}

	&.slide-enter,
	&.slide-leave-to {
		transform: translateX(100%);
	}
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
	border: none; // 清除点击时的高亮边框
	outline: none;

	/*很关键：将默认的select选择框样式清除*/
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;

	width: 100%;
	box-sizing: border-box;
	font-size: 0.9rem;
	color: #333;
	background: transparent;
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
