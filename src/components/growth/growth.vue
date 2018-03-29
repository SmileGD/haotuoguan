<template>
	<div class="wrapper" ref="BScrollWrapper">
		<ul class="wrapper-list">
			<li class="wrapper-item" v-for="item in times">
				<div class="top">
					<img :src="top_img" class="top-img">
				</div>
				<div class="user">
					<div class="user-avator">
						<img :src="item.user.avator">
					</div>
					<div class="content">
						<div class="user-name">{{item.user.name}}</div>
						<div class="date">
							<span>{{item.date |formatDate}}</span>
						</div>
					</div>
				</div>
				<div class="text">{{item.text}}</div>
				<ul :class="[{'pic-list': item.photos.length > 2},{'pic-list-2': item.photos.length == 2},{'pic-list-1': item.photos.length == 1}]">
					<li class="pic-item" v-for="pic in item.photos">
						<img :src="pic" class="pic">
					</li>
				</ul>
				<a href="javascript:;" class="show-com">
					<img :src="com_img" class="com-img">
				</a>
				<transition name="slide">
					<ul class="com-list" v-show="item.comments.length && fold">
						<li class="com-item" v-for="com in item.comments">
							<div class="name">{{com.name}}:</div>
							<div class="comment">{{com.text}}</div>
						</li>
					</ul>
				</transition>
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';

	import top_img from "./ic_decoration.png";
	import com_img from "./ic_comments.png";
	import {formatDate} from '../../common/js/date.js';

	const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
	const ERR_CODE = 1;

	export default {
		data(){
			return {
				top_img: top_img,
				com_img: com_img,
				times: [],
				fold: false
			};
		},

		computed: {

		},

		methods: {
			// 初始化滚动
			_initScroll(){
				this.BScroll = new BScroll(this.$refs.BScrollWrapper,{
					click:true
				});
			}
		},

		filters:{
			formatDate(time) {
				let date = new Date(time);
				return formatDate(date,'YYYY-MM-DD hh:mm');
			}
		},

		created(){
			this.$http.post(URL+'/weixin_api/get_growth_info').then((response) => {
				response = response.body;
				if(response.code == ERR_CODE) {
					this.times = response.data.times;

					this.$nextTick(() => {
						this._initScroll();
					});
				}
			})
		}
	}
</script>

<style scoped lang="less">
	.wrapper {
		width: 100%;
		height: 27rem;
		margin-bottom: 2.5rem;
		overflow: hidden;
	}

	.wrapper-list {
		box-sizing: border-box;
		width: 100%;
		background: #fff;

		.top {
			position: relative;
			width: 100%;
			height: 1.2rem;
			margin-bottom: .2rem;
			background: #ededed;
		}

		.top-img {
			position: absolute;
			left: 0;
			top: .8rem;
			width: 100%;
		}

		.user {
			display: flex;
			padding: .8rem .65rem;
		}

		.user-avator {
				width: 2rem;
				height: 2rem;
				margin-right: .45rem;

				img {
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
				}
		}

		.content {
			flex: 1;
		}

		.user-name {
			margin-bottom: .2rem;
			font-size: .9rem;
			color: #333;
		}

		.date {
			font-size: .7rem;
			color: #adadad;
		}

		.text {
			padding: 0 .65rem;
			font-size: .75rem;
			line-height: 1.25rem;
			color: #333;
		}

		.pic-list {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			padding: .8rem .65rem 0;

			.pic-item {
				width: 5.6rem;
				height: 5.6rem;
				margin: 0 .2rem .2rem 0;

				&:nth-child(3n) {
					margin-right: 0;
				}
			}
		}

		.pic-list-2 {
			display: flex;
			width: 100%;
			padding: .8rem .65rem 0;
			box-sizing: border-box;

			.pic-item {
				width: 8.6rem;
				height: 8.6rem;

				&:first-child {
					margin-right: .2rem;
				}
			}
		}

		.pic-list-1 {
			width: 17rem;
			height: 15rem;
			padding: .8rem .65rem 0;

			.pic-item {
				width: 17rem;
				height: 15rem;
			}
		}

		.pic {
			width: 100%;
			height: 100%;
		}

		.show-com {
			display: block;
			position: relative;
			width: 100%;
			height: 2.2rem;

			.com-img {
				position: absolute;
				right: 1rem;
				bottom: .5rem;
				width: 1.1rem;
				height: 1rem;
			}
		}

		.com-list {
			padding: .65rem 1.7rem .65rem .65rem;
			border-top: 2px solid #ebebeb;
		}

		.com-item {
			display: flex;
			margin-bottom: .2rem;
			font-size: .7rem;
			line-height: 1.2rem;
			color:#333;

			.name {
				color: #134aa0;
			}
		}

	}
</style>
