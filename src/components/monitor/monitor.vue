<template>
	<div class="monitor">
		<div class="header">
			<div class="user">
				<img class="avator" :src="user.avator">
				<span class="name">{{user.name}}</span>
			</div>
			<div class="dymanic">
				<img class="icon" :src="icon">
				<span class="text">实时监控</span>
			</div>
		</div>
		<ul class="view-list clearfix">
			<li class="view-item" v-for="item in views">
				<div class="view">
					<img :src="item.view">
				</div>
				<div class="shadow"></div>
				<div class="text">{{item.text}}</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import icon from './ic_monitoring.png';
	import view from './m-banner01.png';

	const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
	const ERR_CODE = 1;

	export default {
		data(){
			return {
				user:{},
				view: view,
				icon: icon,
				views: [
					{view: view,text:"教室"},
					{view: view,text:"卧室"},
					{view: view,text:"走廊"},
					{view: view,text:"教室"},
					{view: view,text:"卧室"},
					{view: view,text:"走廊"}
				]
			}
		},
		created(){
			this.$http.post(URL+'/weixin_api/get_user_info').then((response) => {
				response = response.body;
				if(response.code == ERR_CODE) {
					this.user = response.data;
				}
			})
		}
	}
</script>

<style scoped lang="less">
	.monitor {
		z-index: 99;
		position: relative;
		min-height: 100%;
		background: #f0f0f0;
	}

	.header {
		position: relative;
		width: 100%;
		height: 3.75rem;
		line-height: 3.75rem;
		font-size: 0;
		background: #fff;
		border-bottom: 2px solid #f0f0f0;

		.user {
			display: inline-block;

			.avator {
				width: 3.0rem;
				height: 3.0rem;
				margin: 0.4rem 0.65rem 0 1.3rem;
				vertical-align: top;
				border-radius: 50%;
			}

			.name {
				font-size: 0.9rem;
				color: #333;
			}
		}

		.dymanic {
			position: absolute;
			top: 50%;
			right: 0.65rem;
			transform: translateY(-50%);


			.icon {
				height: 0.9rem;
				margin-right: 0.45rem;
			}

			.text {
				font-size: 0.65rem;
				color: #a2abe9;
			}
		}
	}

	.view-list {
		padding: 0.65rem 0.8rem;
		background: #fff;

		.view-item {
			float: left;
			width: 5.35rem;
			margin: 0 0.5rem 0.5rem 0;
			text-align: center;

			&:nth-child(3n) {
				margin-right: 0;
			}

			.view {
				width: 100%;
				height: 5.0rem;
				margin-bottom: 0.25rem;

				img {
					width: 100%;
					height: 5.0rem;
				}
			}
			
			.shadow {
				width: 100%;
				height: .5rem;
				background-image: url('./ic_shadow.png');
				background-position: -0.5rem 0;
				box-shadow: 0 .1rem .1rem #eee inset;
			}

			.text {
				padding: 0.2rem 0 .65rem;
				font-size: 0.75rem;
				color: #333;
			}
		}
	}
</style>