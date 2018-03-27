<template>
	<div class="change">
		<ul class="change-wrapper">
			<li class="change-item" v-for="item in orgs">
				<div class="title">
					<h3 class="title-text">{{item.campus}}-{{item.org_name}}</h3>
					<div class="selected" v-show="item.show" @click="cancelSelect(item)">已选</div>
				</div>
				<div class="user">
					<img :src="item.avator" class="avator">
					<span class="name">{{item.name}}</span>
					<img :src="icon_1" class="icon" @click="select(item)">
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import icon_1 from './ic_switch.png';
	import icon_2 from './ic_switch_change.png';

	import Vue from 'vue';

	const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
	const ERR_CODE = 1;

	export default {
		data(){
			return {
				icon_1: icon_1,
				icon_2: icon_2,
				user: {},
				orgs: []
			}
		},

		methods: {
			appendAttr(){
				this.orgs.map((item) => {
					Vue.set(item,'show',false)
				})
			},
			select(item){
				item.show = true;
			},
			cancelSelect(item){
				item.show = false;
			}
		},

		created(){
			this.$http.post(URL+'/weixin_api/get_user_info').then((response) => {
				response = response.body;
				if(response.code == ERR_CODE) {
					this.user = response.data;
					for(let i = 0; i < 6; i++){
						let obj = {};
						obj.campus = this.user.campus;
						obj.org_name = this.user.org_name;
						obj.avator = this.user.avator;
						obj.name = this.user.name;
						this.orgs.push(obj);
					}
					this.appendAttr();
				}
			})
		}
	}
</script>

<style scoped lang="less">
	.change-wrapper {
		padding: 0 0.65rem;

		.change-item {
			margin-bottom: 0.9rem;
			background: #fff;

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
				padding: 0.4rem  0 0.4rem 0.65rem;
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