<template>
	<div class="sign-in" ref="BScrollWrapper">
		<div>
<!-- 			<div class="student-basic clearfix">
				<h1 class="basic-header">{{$route.params.user.campus}}-{{$route.params.user.org_name}}</h1>
				<div class="student-info">
					<img :src="$route.params.user.user_avator" class="student-avator">
					<div class="student-desc">
						<h3 class="student-name">{{$route.params.user.user_name}}</h3>
						<div class="student-text">
							<span class="mr-14">{{$route.params.user.school_addr}}</span>
							<span> {{$route.params.user.grade}}</span>
						</div>
					</div>
				</div>
				<div class="integral">
					<div id="score01" class="integral-item">
						本月签到 :
						<span>{{data.sign_count}}</span>
					</div>
					<div id="score02" class="integral-item">
						缺勤 :
						<span>{{data.absence_count}}</span>
					</div>
					<div id="score03" class="integral-item">
						请假 :
						<span>{{data.leave_count}}</span>
					</div>
				</div>
			</div> -->
			<div class="timetag">
				<img :src="icon" class="icon">
				<span class="text">考勤记录</span>
			</div>
			<ul class="t-records">
				<li class="item" v-for="item in records">
					<div class="sign">
						<span class="time">{{item.time |formatDate1}}</span>
						<span v-if="item.type == 1">午托</span>
						<span v-if="item.type == 3">晚托</span>
						<div class="mark"></div>
					</div>
					<div class="sign">
						<span class="sign-l">校门口：</span>
						<span class="sign-r" v-if="item.signIn">签到</span>
						<span class="sign-r" v-else>未签到</span>
						<img class="sign-icon" :src="sign_icon">
					</div>
					<div class="sign">
						<span class="sign-l">机构内：</span>
						<span class="sign-r">{{item.time |formatDate2}}</span>
						<img class="sign-icon" :src="sign_icon">
					</div>
					<div class="sign border-none">
						<span class="sign-l">签退：</span>
						<span class="sign-r" v-if="item.signOut">签退</span>
						<span class="sign-r" v-else>未签退</span>
						<img class="sign-icon" :src="sign_icon">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll';

import icon from './icon_attendance.png';
import sign_icon from './icon_Head-portrait.png';
import { formatDate } from '../../common/js/date.js';

const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	data() {
		return {
			icon: icon,
			sign_icon: sign_icon,
			data: {},
			records: [],
			id:-1
		};
	},
	filters: {
		formatDate1(time) {
			let date = new Date(time);
			return formatDate(date, 'YYYY-MM-DD');
		},
		formatDate2(time) {
			let date = new Date(time);
			return formatDate(date, 'hh:mm:ss');
		}
	},
	methods:{
		// 初始化滚动
		_initScroll(){
			this.indexScroll = new BScroll(this.$refs.BScrollWrapper,{
				click:true
			});
		}
	},
	created() {
		this.id = this.$route.query.id;
		console.log(this.id);
		this.$http.post(URL + '/weixin_api/get_signIn_info?id='+this.id).then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.data = response.data;
				this.records = response.data.records;

				this.$nextTick(() => {
					this._initScroll();
				});

			}
		})
	}
}

</script>
<style scoped lang="less">
.sign-in {
	z-index: 99;
	position: relative;
	height: 100%;
	overflow: hidden;
	background: #f0f0f0;
}

.student-basic {
	box-sizing: border-box;
	width: 17.4rem;
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
	border-bottom: 2px solid #f0f0f0;

	.student-avator {
		width: 3.05rem;
		height: 3.05rem;
		float: left;
		margin: .3rem .65rem 0;
		border-radius: 50%;
	}

	.student-desc {
		padding-top: 1rem;
	}

	.student-name {
		font-size: .9rem;
		font-weight: 500;
		color: #000;
	}

	.student-text {
		margin-top: .5rem;
		font-size: .6rem;
		color: #000;
	}

	.mr-14 {
		margin-right: .7rem;
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
}

.timetag {
	width: 100%;
	height: 2.5rem;
	padding-left: 1.3rem;
	margin-top: .5rem;
	box-sizing: border-box;
	line-height: 2.5rem;
	background: #fff;
	border-bottom: 2px solid #f0f0f0;

	.icon {
		width: 1.15rem;
		height: 1.15rem;
		margin-top: .7rem;
		vertical-align: top;
	}

	.text {
		font-size: .75rem;
		font-weight: 700;
		color: #333;
	}
}

.t-records {
	padding-bottom: 1rem;

	.item {
		padding: 0 1.25rem 0 .65rem;
		margin-bottom: .5rem;
		background: #fff;
	}

	.sign {
		position: relative;
		height: 2rem;
		padding-left: .75rem;
		line-height: 2rem;
		font-size: .8rem;
		color: #333;
		border-bottom: 2px solid #f0f0f0;

		.time {
			margin-right: 1.1rem;
		}

		.mark {
			position: absolute;
			left: -.75rem;
			bottom: 0;
			width: .2rem;
			height: 1.4rem;
			background: #fc6565;
		}

		.sign-icon {
			position: absolute;
			right: 2.8rem;
			top: .3rem;
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 50%;
		}
	}

	.border-none {
		border: none;
	}
}

</style>
