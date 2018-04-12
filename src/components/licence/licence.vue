<template>
	<transition name='slide' mode='out-in'>
		<div class="licence slide-to-left">
<!-- 			<h3 class="header">
				<span class="back" @click="back">返回</span>
				机构许可证
			</h3> -->
			<ul class="licence-list clearfix">
				<li class="licence-item" v-for="img in licences">
					<img :src="img" class="lice-img">
				</li>
			</ul>
			<div class="loading-container" v-show="!licences.length">
				<loading></loading>
			</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
	import loading from 'components/loading/loading';
	const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
	const ERR_CODE = 1;

export default {
	components: {
		loading
	},

	data() {
		return {
			campus_id: -1,
			licences: []
		}
	},

	methods: {
		back() {
			this.$router.push({name: 'campus'});
		}
	},

	created() {
		this.campus_id = this.$route.query.campus_id;
		this.$http.post(URL + '/weixin_api/get_campus_info?id='+this.campus_id).then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.licences = response.data.licence_imgs;
			}
		})
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

	.loading-container {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
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
