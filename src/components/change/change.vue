<template>
	<transition name='slide' mode='out-in'>
		<div class="change slide-to-left" ref="BScrollWrapper">
			<ul class="change-wrapper">
				<li class="change-item" v-for="(item,index) in children" :key="index">
					<input type="checkbox" :value="item.child_id" v-model="selected" style="display: none">
					<div class="title">
						<h3 class="title-text">{{item.campus}}-{{item.org_name}}</h3>
						<div class="selected" v-show="activeindex == index">已选</div>
					</div>
					<div class="user">
						<img :src="item.child_avator" class="avator">
						<span class="name">{{item.child_name}}</span>
						<img :src="icon_1" class="icon" @click="select(index)">
					</div>
				</li>
			</ul>
		</div>
	</transition>
</template>
<script type="text/javascript">
import Vue from 'vue';
import BScroll from 'better-scroll';

import icon_1 from './ic_switch.png';
import icon_2 from './ic_switch_change.png';


const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	data() {
		return {
			icon_1: icon_1,
			icon_2: icon_2,
			children: [],
			activeindex: -1,
			selected:[]
		}
	},

	methods: {
		select(index) {
			this.activeindex = index;
		},

		// 初始化滚动
		_initScroll(){
			this.indexScroll = new BScroll(this.$refs.BScrollWrapper,{
				click:true
			});
		}
	},

	created() {
		this.$http.post(URL + '/weixin_api/switch').then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.children = response.data.children;

				this.$nextTick(function() {
					this._initScroll();
				})

			}
		})
	}
}

</script>
<style scoped lang="less">
.change {
	z-index: 99;
	position: relative;
	height: 100%;
	overflow: hidden;
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

.change-wrapper {
	padding: 0 0.65rem .9rem;

	.change-item {
		margin-bottom: 0.9rem;
		background: #fff;

		&:last-child {
			margin-bottom: 0;
		}

		.title {
			position: relative;
		}

		.selected {
			position: absolute;
			right: 0.65rem;
			top: 50%;
			transform: translateY(-50%);
			padding: 0.2rem 0.45rem;
			font-size: 0.6rem;
			color: #fff;
			background: #f66f70;
			border-radius: 0.25rem;
		}

		.title-text {
			width: 100%;
			height: 2.5rem;
			line-height: 2.5rem;
			font-size: 0.9rem;
			font-weight: 700;
			color: #333;
			text-align: center;
			border-bottom: 0.1rem solid #f0f0f0;
		}

		.user {
			height: 3.75rem;
			padding: 0.4rem 0 0.4rem 0.65rem;
			line-height: 3.75rem;
			box-sizing: border-box;
			font-size: 0;

			.avator {
				width: 3.0rem;
				height: 3.0rem;
				margin-right: 0.65rem;
				vertical-align: top;
				border-radius: 50%;
			}

			.name {
				font-size: 0.9rem;
				color: #333;
			}

			.icon {
				float: right;
				width: 0.85rem;
				height: 0.85rem;
				padding: 1.05rem;
			}
		}
	}
}

</style>
