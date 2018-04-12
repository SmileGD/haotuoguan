<template>
	<transition name="slide" mode="out-in">
		<div class="env-pic-wrapper slide-to-left">
			<scroll class="scroll" :data="data">
				<div class="container">
					<ul class="env-list" ref="waterfall">
						<li class="env-item" v-for="(item, index) in data">
							<img class="env-img" :src="item.src">
						</li>
					</ul>
				</div>
			</scroll>
			<div class="loading-container" v-show="!data.length">
				<loading></loading>
			</div>
		</div>
	</transition>
</template>
<script type="text/javascript">
import scroll from 'components/scroll/scroll';
import loading from 'components/loading/loading';

const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

const colWidth = 8.4;
const colNum = 2;
const gapX = 0.65;
const gapY = 0.65;

export default {
	components: {
		scroll,
		loading
	},

	data() {
		return {
			campus_id: -1,
			data: []
		}
	},

	methods: {
		back() {
			this.$router.push({ name: 'campus' });
		},
		waterFall(el) {
			let clientWidth = document.documentElement.clientWidth;
			let rem = 20 * (clientWidth / 375);
			let waterfall = el;
			let items = waterfall.children;
			let heightArr = [];
			for(let i = 0; i < items.length; i++) {
				// 第一排的盒子 排列
				if(i < colNum) {
					items[i].style.top = 0;
					items[i].style.left = i * (colWidth + gapX) + 'rem';
					heightArr[i] = items[i].offsetHeight / rem;
				}else {
					// 找最矮的一列
					let minIndex = 0;
					let minHeight = heightArr[minIndex];
					heightArr.forEach((item, index) => {
						if( minHeight > item) {
							minHeight = item;
							minIndex = index;
						}
					})

					// 设置定位
					items[i].style.top = (minHeight + gapY) + 'rem';
					items[i].style.left = minIndex * (colWidth + gapX) + 'rem';

					// 重新记录当前列的高度
					heightArr[minIndex] = minHeight + items[i].offsetHeight / rem + gapY;
				}
			}

			// 设置大容器的高度 撑开页面
			let maxHeight = heightArr[0];
			heightArr.forEach((item, index) => {
				if( maxHeight < item) {
					maxHeight = item;
				}
			});
			waterfall.style.height = maxHeight + 'rem';
		}
	},

	created() {
		this.campus_id = this.$route.query.campus_id;
		this.$http.post(URL + '/weixin_api/get_campus_info?id=' + this.campus_id).then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.data = response.data.env_imgs;
			}
		});
	},

	updated() {
		setTimeout(() => {
			this.waterFall(this.$refs.waterfall);
		},20);
	}
}

</script>
<style scoped lang="less">
.env-pic-wrapper {
	z-index: 99;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff;
}

	.loading-container {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

.scroll {
	height: 100%;
	overflow: hidden;
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

.container {
	padding: 0.65rem;
}

.env-list {
	position: relative;

	.env-item {
		position: absolute;
		left: 0;
		top: 0;
		width: 8.2rem;
		margin: 0 0.65rem 0.65rem 0;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);;

		&:nth-child(2n) {
			margin-right: 0;
		}

		.env-img {
			display: block;
			width: 100%;
		}
	}
}

</style>
