<template>
	<transition name='slide' mode='out-in'>
		<div class="licence slide-to-left" v-show="showLicence">
			<h3 class="header">
			<span class="back" @click="back">返回</span>
			机构许可证
		</h3>
			<ul class="licence-list clearfix">
				<li class="licence-item" v-for="img in licences">
					<img :src="img" class="lice-img">
				</li>
			</ul>
		</div>
	</transition>
</template>
<script type="text/javascript">

export default {
	props: {
		licences: {
			type: Array
		}
	},

	data() {
		return {
			showLicence: false
		}
	},

	methods: {
		show() {
			this.showLicence = true;
		},
		back() {
			this.showLicence = false;
		}
	}
}

</script>
<style scoped lang="less">
	.licence {
		z-index: 99;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #fff;
	}

	.slide-to-left {
		&.slide-enter-active,
		&.slide-leave-active {
			transition: all 0.5s;
			transform: translateX(0);
		}

		&.slide-enter,
		&.slide-leave-to {
			transform: translateX(100%);
		}
	}


.header {
	position: relative;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 0.9rem;
	color: #333;
	text-align: center;
	background: #9a9a9a;

	.back {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: .7rem;
	}
}

.licence-list {
	padding: 0.65rem;
	box-sizing: border-box;

	.licence-item {
		float: left;
		width: 8.2rem;
		height: 5.5rem;
		margin: 0 0.65rem 0.65rem 0;
		box-shadow: 3px 3px 5px #ccc;

		&:nth-child(2n) {
			margin-right: 0;
		}

		.lice-img {
			width: 100%;
			height: 100%;
		}
	}
}

</style>
