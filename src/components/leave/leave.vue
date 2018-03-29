<template>
	<div class="leave">
	<!-- 	<div class="student-basic clearfix">
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
		</div> -->
		<div class="tab">
			<div class="tab-item" :class="{'tab-active': type == 0}" @click="selectType(0)">请假</div>
			<div class="tab-item" :class="{'tab-active': type == 1}" @click="selectType(1)">取消请假</div>
		</div>
		<div v-show="type == 0">
			<div class="time-select">
				<div class="title">请选择请假日期</div>
				<div class="item">
					<span>开始时间</span>
					<input class="start-time" type="text" id="starttime" name="starttime" readonly="readonly" placeholder="选择开始日期" data-date-format="yyyy-mm-dd">
				</div>
				<div class="item">
					<span>结束时间</span>
					<input class="end-time" type="text" id="endtime" name="endtime" readonly="readonly" placeholder="选择结束日期" data-date-format="yyyy-mm-dd">
				</div>
			</div>
			<div class="comfirm">确定</div>
		</div>

		<div v-show="type == 1">
			<ul class="leave-lsit">
				<li class="leave-item" v-for="(item, $index) in leaves">
					<label :for="item.id" class = "label-wrapper">
						<input type="checkbox" class="checkbox" :id="item.id" :value="item" v-model="selected">
						<label :for="item.id" class='checkbox-icon'>
							<img :src="check" class="check">
						</label>
						<div class="date">日期: {{item.date}}</div>
						<img :src="item.type == 1 ? noon : night" class="type-img">
					</label>
				</li>
			</ul>

			<div class="tab tab-fixed">
				<input id="all" type="checkbox" v-model="selectAll" style="display:none">
				<label for="all" class="tab-item border-right">全部选择</label>
				<div class="tab-item">确定</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import jquery from '../../common/js/jquery_3.1.1.js';
	import {mobiscroll} from '../../common/js/mobiscroll.min.zh.js';
	import '../../common/css/mobiscroll.min.css';


	import noon from './ic_afternoon.png';
	import night from './ic_night.png';
	import check from './icon_yuan.png';

	export default {
		data(){
			return {
					type: 0,
					noon: noon,
					night: night,
					check: check,
					checkall: false,
					checked: true,
					selected: [],
					leaves: [
						{
							id: 1,
							type: 1,
							date: '2018-03-24'
						},
						{
							id: 2,
							type: 3,
							date: '2018-03-24'
						},
						{
							id: 3,
							type: 1,
							date: '2018-03-24'
						}
					]
			};
		},
		methods: {
			selectType(type) {
				this.type = type;
			},
			startTime(el){
				let now = new Date(),
					max = new Date(now.getFullYear() + 3, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
				let instance1 = mobiscroll.datetime(el, {
					lang: 'zh',
					theme: 'ios',
					display: 'bottom',
					headerText: '选择开始时间',
					min: now,
					max: max,
					minWidth: 50,
					dateFormat: 'yy-mm-dd',
					dateWheels: 'yy mm dd',
					showLabel: true
				});
			},
			endTime(el){
				let now = new Date(),
					max = new Date(now.getFullYear() + 3, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
				let instance2 = mobiscroll.datetime(el, {
					lang: 'zh',
					theme: 'ios',
					display: 'bottom',
					headerText: '选择结束时间',
					min: now,
					max: max,
					minWidth: 50,
					dateFormat: 'yy-mm-dd',
					dateWheels: 'yy mm dd',
					showLabel: true
				});
			}
		},
		computed: {
			selectAll: {
				get: function () {
					return this.leaves ? this.selected.length == this.leaves.length : false;
				},

				set: function (value) {
					var selected = [];
					if (value) {
						this.leaves.forEach(function (item) {
							selected.push(item);
							});
					}
					this.selected = selected;
				}
			}
		},
		mounted(){
			this.startTime('#starttime');
			this.endTime('#endtime');
		}
	}
</script>

<style scoped lang="less">
	.student-basic {
		box-sizing: border-box;
		width: 100%;
		background: #fff;
	}

	.student-info {
		position: relative;
		display: block;
		height: 3.75rem;
		border-bottom: 1px solid #f0f0f0;

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

	.tab {
		display: flex;
		width: 100%;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: .75rem;
		color: #333;
		text-align: center;
		background: #fff;
		border-top: 1px solid #f0f0f0;

		.tab-item{
			flex: 1;
			font-weight: 700;
		}

		.tab-active {
			color: #fff;
			background: #76ccf6;
		}
	}

	.time-select {
		width: 17.4rem;
		margin: .65rem;
		overflow: hidden;
		background: #fff;

		.title {
			width: 100%;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			font-size: .9rem;
			font-weight: 700;
			color: #333;
		}

		.item {
			width: 100%;
			height: 2.5rem;
			padding:0 1.1rem 0 1.9rem;
			box-sizing: border-box;
			line-height: 2.5rem;
			font-size: .75rem;
			color: #333;
			border-top: 1px solid #f0f0f0;
		}

		.start-time,
		.end-time {
			float: right;
			margin-top: .9rem;

			&::placeholder {
				font-size: .75rem;
				color: #adadad;
			}
		}
	}

	.comfirm {
		margin: 0 .65rem;
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		font-size: .9rem;
		font-weight: 700;
		color: #fff;
		background: #76ccf6;
	}

	.leave-lsit {
		padding: 0.65rem;

		.leave-item {
			position: relative;
			height: 2.5rem;
			line-height: 2.5rem;
			margin-bottom: 0.65rem;
			font-size: 0;
			background: #fff;
		}

		.date {
			display: inline-block;
			font-size: 0.9rem;
			color: #333;
		}
		
		.type-img {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 1.65rem;
		}
	}

	.tab-fixed {
		z-index: 999;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	.border-right {
		border-right: 1px solid #f0f0f0;
	}


	.label-wrapper {
		display: block;
		width: 100%;
		height: 100%;
	}

	.checkbox {
		display: none;
	}

	.checkbox+.checkbox-icon {
		display: inline-block;
		position: relative;
		margin: 0.8rem 1.7rem 0 0.65rem;
		width: 0.9rem;
		height: 0.9rem;
		vertical-align: top;
		border: 1px solid #333;
		border-radius: 50%;
	}

	.check {
		display: none;
		position: absolute;
		left: -0.2rem;
		top: -0.1rem;
		width: 1.25rem;
		height: 1.1rem;
	}

	.checkbox:checked+.checkbox-icon > .check {
		display: block;
	}
</style>