<template>
	<div>
		<div class="student-basic clearfix">
			<h1 class="basic-header">{{user.campus}}-{{user.org_name}}</h1>
			<div class="student-info">
				<img :src="user.avator" class="student-avator">
				<div class="student-desc">
					<h3 class="student-name">{{user.name}}</h3>
					<div class="student-text">
						<span class="mr-14">{{user.school_addr}}</span>
						<span> {{user.grade}}</span>
					</div>
				</div>
			</div>
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
		<ul class="opt-list">
			<li class="opt-item" v-for="opt in options">
				<router-link :to="{name:opt.url,query: {id:user.id}}" class="link">
					<img :src="opt.imgUrl" class="opt-img">
					<span class="opt-text">{{opt.text}}</span>
				</router-link>
			</li>
			<li class="opt-item" @click="showExit">
				<img :src="opt_4" class="opt-img">
				<span class="opt-text">退出</span>
			</li>
		</ul>
		<transition name="fade">
			<div class="exit-wrapper" v-show="show">
				<div class="exit">
					<div class="content">
						<div class="option header">是否退出当前账号</div>
						<div class="option" @click="gotoLogin">是</div>
						<div class="option" @click="hideExit">否</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import opt_1 from './ic_Personal-information.png';
import opt_2 from './ic_Change-the-password.png';
import opt_3 from './ic_switch.png';
import opt_4 from './ic_exit.png';

const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	data() {
		return {
			opt_4: opt_4,
			user: {},
			options: [
				{ url: "personal", imgUrl: opt_1, text: "修改个人信息" },
				{ url: "modify_pwd", imgUrl: opt_2, text: "修改密码" },
				{ url: "change", imgUrl: opt_3, text: "切换孩子/机构" }
			],
			show: false
		}
	},

	methods: {
		showExit() {
			this.show = true;
		},
		hideExit() {
			this.show = false;
		},
		gotoLogin() {
			this.$router.push({
				name:"login"
			});
			this.hideExit();
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

	.integral-more {
		position: absolute;
		right: .9rem;
		top: 50%;
		height: .7rem;
		margin-top: -.35rem;
	}
}

.opt-list {
	box-sizing: border-box;
	width: 17.4rem;
	margin: .65rem .6rem;
	background: #fff;

	.opt-item {
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 0;
		border-bottom: .1rem solid #f0f0f0;

		&:last-child {
			border: 0;
		}
	}

	.opt-img {
		width: 1.5rem;
		height: 1.5rem;
		margin: .5rem .5rem 0 .65rem;
		vertical-align: top;
	}

	.link {
		display: block;
		width: 100%;
		height: 1.5rem;
	}

	.opt-text {
		font-size: .75rem;
		color: #333;
	}
}

.exit-wrapper {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	.exit {
		width: 14.0rem;
		padding: 0.75rem;
		box-sizing: border-box;
		background: #f0f0f0;
	}

	.option {
		width: 12.45rem;
		height: 2.45rem;
		line-height: 2.45rem;
		font-size: 0.9rem;
		color: #333;
		text-align: center;
		margin-bottom: 0.15rem;
		background: #fff;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.header {
		font-weight: 700;
		color: #fff;
		background: #333;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

</style>
