<template>
	<div class="index" ref="BScrollWrapper">
		<!-- BScroll容器 -->
		<div>
			<!-- 轮播图 -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="banner in banners">
						<img :src="banner.url" alt="">
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<!-- 用户信息 -->
			<div class="student-basic clearfix">
				<h1 class="basic-header">{{user.campus}}-{{user.org_name}}</h1>
				<router-link class="student-info" :to="{name:'mine',query: {id: user.id}}">
					<img :src="user.avator" class="student-avator">
					<h3 class="student-name">{{user.name}}</h3>
					<img src="./ic_particulars.png" alt="" class="student-detail">
				</router-link>
				<router-link to="/" class="integral">
					<div id="score01" class="integral-item">
						积分 :
						<span>{{user.integral}}</span>
					</div>
					<div id="score02" class="integral-item">
						累计 :
						<span>{{user.total_integral}}</span>
					</div>
					<div id="score03" class="integral-item">
						校区排名 :
						<span>{{user.ranking}}</span>
					</div>
					<img src="./ic_more.png" alt="更多信息" class="integral-more">
				</router-link>
			</div>

			<!-- 功能列表 -->
			<ul class="student-record clearfix">
				<li class="record-item" v-for="item in record">
					<router-link :to="{name:item.url,query: {id: user.id}}">
						<img :src="item.imgUrl" class="item-img" :alt="item.title">
						<div class="item-text">
							<p class="item-text-title" v-html="item.title"></p>
							<p class="item-text-cont" v-html="item.text"></p>
						</div>
					</router-link>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

import banner_a from './m-banner01.jpg';
import banner_b from './m-banner02.jpg';
import record_1 from './ic_1.png';
import record_2 from './ic_2.png';
import record_3 from './ic_3.png';
import record_4 from './ic_4.png';
import record_5 from './ic_5.png';
import record_6 from './ic_6.png';

const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	data() {
		return {
			banners: [
				{ url: banner_a },
				{ url: banner_b }
			],
			record: [
				{ title: '签到记录', text: '实时掌握孩子位置', url: 'signIn', imgUrl: record_1 },
				{ title: '请个小假', text: '了解孩子出勤情况', url: 'leave', imgUrl: record_2 },
				{ title: '校园食谱', text: '关注孩子饮食健康', url: 'recipes', imgUrl: record_3 },
				{ title: '校园监控', text: '了解孩子校区动态', url: 'monitor', imgUrl: record_5 },
				{ title: '基因检测', text: '', url: 'geneTest', imgUrl: record_6 }
			],
			user: {}
		}
	},

	methods: {
		// 初始化滚动
		_initScroll(){
			this.indexScroll = new BScroll(this.$refs.BScrollWrapper,{
				click:true
			});
		}
	},

	created() {
		this.$http.post(URL + '/weixin_api/get_user_info').then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.user = response.data;

				this.$nextTick(() => {
					this._initScroll();
				});

			}
		})
	},

	mounted() {
		let swiper = new Swiper('.swiper-container', {
			loop: true,
			speed: 600,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			onTouchEnd: function() {
				swiper.startAutoplay();
			}
		});
	}
}

</script>
<style scoped lang="less">
.index {
	position: fixed;
	width: 100%;
	height: 24rem;
	padding-bottom: 3rem;
	overflow: hidden;
}

.swiper-container {
	width: 100%;
	height: 8.5rem;

	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.swiper-pagination {
		font-size: 0;
	}

	.swiper-pagination-bullet {
		display: inline-block;
		width: .4rem;
		height: .4rem;
		border: 1px solid #fff;
		border-radius: 50%;
	}

	.swiper-pagination-bullet-active {
		display: inline-block;
		width: .4rem;
		height: .4rem;
		background: #fff;
		border: 1px solid #fff;
		border-radius: 50%;
	}
}

.student-basic {
	box-sizing: border-box;
	margin: .55rem .6rem;
	background: #fff;

	.basic-header {
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: .9rem;
		font-weight: bold;
		color: #333;
		text-align: center;
		border-bottom: 2px solid #f0f0f0;
	}
}

.student-info {
	position: relative;
	display: block;
	height: 3.75rem;
	line-height: 3.75rem;
	border-bottom: 2px solid #f0f0f0;

	.student-avator {
		width: 3.05rem;
		height: 3.05rem;
		float: left;
		margin: .3rem .65rem 0;
		border-radius: 50%;
	}

	.student-name {
		font-size: .9rem;
		color: #333;
	}

	.student-detail {
		position: absolute;
		right: .65rem;
		top: 50%;
		width: .9rem;
		height: .9rem;
		margin-top: -.45rem;
	}
}

.integral {
	position: relative;
	display: block;
	height: 2.5rem;
	padding: 0 1.3rem 0 .65rem;
	line-height: 2.5rem;
	font-size: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	.integral-item {
		display: inline-block;
		font-size: .75rem;
		color: #333;
		margin-right: .5rem;
	}

	.integral-more {
		position: absolute;
		right: .9rem;
		top: 50%;
		height: .7rem;
		margin-top: -.35rem;
	}
}

.student-record {

	box-sizing: border-box;
	width: 100%;
	padding: 0 .6rem;
	margin-top: .5rem;
}

.record-item {
	float: left;
	width: 8.5rem;
	height: 3.75rem;
	margin-bottom: .5rem;
	border-radius: .25rem;
	background: #fff;

	.item-img {
		float: left;
		width: 1.55rem;
		height: 1.55rem;
		margin: 1.1rem .5rem 0 .9rem;
	}

	.item-text {
		float: left;
		margin-top: 1.05rem;
	}

	.item-text-title {
		margin-bottom: .4rem;
		font-size: .75rem;
		color: #333;
	}

	.item-text-cont {
		width: 5rem;
		font-size: .6rem;
		color: #b7b7b7;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

.record-item:nth-child(2n) {
	margin-left: .5rem;
}

</style>
