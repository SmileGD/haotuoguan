<template>
	<div class="teacher-intro">
		<ul class="teachers">
			<li class="teacher" v-for="teacher in teachers">
				<div class="avator">
					<img :src="teacher.avator">
				</div>
				<div class="desc">
					<h3 class="name">{{teacher.name}}</h3>
					<p class="text">{{teacher.signature}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
	const ERR_CODE = 1;

	export default {
		data(){
			return {
				teachers:[]
			}
		},

		created(){
			this.$http.post(URL+'/weixin_api/get_campus_info').then((response) => {
				response = response.body;
				if(response.code == ERR_CODE) {
					this.teachers = response.data.teachers;
					console.log(this.teachers);
					console.log(this.teachers.length);
				}
			})
		}
	}
</script>

<style scoped lang="less">
	.teachers {
		width: 100%;
		overflow: hidden;
		background: #fff;

		.teacher {
			display: flex;
			width: 100%;
			height: 3.75rem;
			padding: 0.5rem 0.75rem;
			box-sizing: border-box;
			font-size: 0;
			border-bottom: 0.1rem solid #f4f4f4;

			&:last-child {
				border-bottom: none;
			}

			.avator {
				display: inline-block;
				flex: 0 0 2.8rem;
				width: 2.8rem;
				height: 2.8rem;
				margin-right: 0.75rem;
				border-radius: 50%;

				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.desc {
				display: inline-block;
				flex: 1;
				margin-top: 0.65rem;
				overflow: hidden;

				.name {
					margin-bottom: 0.45rem;
					font-size: 0.75rem;
					font-weight: 700;
					color: #333;
				}

				.text {
					font-size: 0.7rem;
					color: #cdcdcd;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>