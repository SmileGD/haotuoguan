<template>
	<scroll class="campus" ref="scroll">
		<div>
			<!-- 轮播图 -->
			<div v-if="banners.length">
				<slider class="campus-swiper" ref="slider">
					<div v-for="banner in banners">
							<img :src="banner" class="banner">
					</div>
				</slider>
			</div>

			<!--校区-->
			<div class="school-wrapper">
				<!-- 校区介绍 -->
				<div class="school-name">
					<span>{{campus.campus}}-{{campus.org_name}}</span>
				</div>
				<div class="school-desc">
					<div class="desc-l">校区介绍</div>
					<div class="desc-r">{{campus.intro}}</div>
				</div>
				<div class="school-desc">
					<div class="desc-l">地址详情</div>
					<div class="desc-r">{{campus.address}}</div>
				</div>
				<!--教学师资-->
				<div class="teachers clearfix">
					<div class="text">
						教学师资
						<span class="more" @click="allTeachers">更多</span>
					</div>
					<ul class="teacher-list">
						<li class="teacher-item" v-for="teacher in teachers">
							<img :src="teacher.avator" class="teacher-avator">
							<p class="name">{{teacher.name}}</p>
						</li>
					</ul>
				</div>
				<!--机构环境-->
				<div class="environment clearfix">
					<div class="left" @click="morePic">
						<p class="text"><span class="count">{{env_imgs.length}}</span>张</p>
						<p>{{campus.org_name}}</p>
						<p>机构环境</p>
					</div>
					<ul class="pics clearfix">
						<li class="pic-item" v-for="item in env_imgs">
							<img :src="item.src" class="pic-width">
						</li>
					</ul>
				</div>
				<!--机构许可证-->
				<div class="licence-wrapper clearfix">
					<h3 class="header" @click="showLicence">机构许可证</h3>
					<ul class="licence-list">
						<li class="licence-item" v-for="url in lic_imgs">
							<img :src="url" class="licence-img">
						</li>
					</ul>
				</div>
			</div>
		</div>
	</scroll>
</template>
<script>
import scroll from 'components/scroll/scroll';
import slider from 'components/slider/slider';


const URL = 'http://rap2.api.haotuoguan.cn/app/mock/18/POST/';
const ERR_CODE = 1;

export default {
	components: {
		scroll,
		slider
	},

	data() {
		return {
			campus: {},
			banners: [],
			teachers: [],
			env_imgs: [],
			lic_imgs: []
		}
	},

	methods: {
		mySwiper() {
			this.swiper = new Swiper('.swiper-container', {
				loop: true,
				speed: 400,
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
			})
		},

		getFiveTeacher() {
			for (let i = 0; i < 5; i++) {
				this.teachers.push(this.campus.teachers[i]);
			}
		},
		allTeachers() {
			this.$router.push({
				name: 'teacher_intro'
			})
		},
		showLicence() {
			this.$router.push(
			{
				name: 'licence', 
				query: {campus_id: 12}
			});
		},
		morePic() {
			this.$router.push(
			{
				name: 'env_pic'
			});
		}
	},

	created() {
		this.$http.post(URL + '/weixin_api/get_campus_info').then((response) => {
			response = response.body;
			if (response.code == ERR_CODE) {
				this.campus = response.data;
				this.banners = this.campus.banner_imgs;
				this.env_imgs = this.campus.env_imgs;
				this.lic_imgs = this.campus.licence_imgs;
				this.getFiveTeacher();
			}
		})
	},

	activated() {
		setTimeout(() => {
			if(this.$refs.scroll && this.$refs.slider) {
				this.$refs.scroll.refresh();
				this.$refs.slider.next();
			}
		},20);
	}
}

</script>
<style scoped lang="less">
.campus {
	width: 100%;
	height: 27rem;
	overflow: hidden;
	background: #fff;

	.campus-swiper {
		height: 9.5rem;

		.banner {
				height: 9.5rem;
		}

		.dots {
			position: absolute;
			right: 0;
			left: 0;
			bottom: 0.6rem;
			text-align: center;
			font-size: 0;

			.dot {
				display: inline-block;
				margin: 0 0.2rem;
				width: 0.6rem;
				height: 0.6rem;
				background: url("./ic_square1.png");
				background-size: .6rem .6rem;
			}

			.active {
				width: .6rem;
				height: .6rem;
				background: url("./ic_square.png");
				background-size: .6rem .6rem;
			}
		}
	}
}

.school-wrapper {
	background: #fff;
}

.school-name {
	width: 100%;
	height: 3.2rem;
	line-height: 3.2rem;
	text-align: center;
	font-size: .9rem;
	color: #333;
	border-bottom: .1rem solid #eee;
}

.school-desc {
	display: flex;
	padding: .6rem 0 .8rem;
	font-size: 0;
	color: #333;
	border-bottom: .1rem solid #eee;

	.desc-l,
	.desc-r {
		display: inline-block;
		font-size: .75rem;
	}

	.desc-l {
		width: 5.5rem;
		line-height: 1.4rem;
		text-align: center;
	}

	.desc-r {
		flex: 1;
		max-height: 5.7rem;
		line-height: 1.4rem;
		padding-right: .65rem;
		overflow: hidden;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		word-break: break-all;
		display: -webkit-box;
		text-overflow: ellipsis;
	}
}


.teachers {
	.text {
		position: relative;
		height: 2.5rem;
		padding-left: 1.3rem;
		line-height: 2.5rem;
		font-size: .75rem;
		color: #333;
	}

	.more {
		position: absolute;
		right: 0;
		top: 0;
		padding: 0 0.9rem;
	}
}

.teacher-list {
	height: 5rem;
	padding: 0 .6rem .6rem 1.3rem;
	margin-bottom: .6rem;
	overflow: hidden;

	.teacher-item {
		float: left;
		width: 2.5rem;
		padding: .6rem 0;
		margin-right: 1rem;
		text-align: center;

		&:nth-child(5) {
			margin-right: 0;
		}
	}

	.teacher-avator {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
	}

	.name {
		margin-top: .65rem;
		font-size: .65rem;
		color: #3333;
	}
}



.environment {
	display: flex;
	width: 100%;
	height: 7rem;

	.left {
		box-sizing: border-box;
		float: left;
		width: 6.5rem;
		height: 7rem;
		line-height: 1.5rem;
		padding: 1.6rem 0 0 1.3rem;
		font-size: .75rem;
		color: #fff;
		background: #6198d3;
	}

	.text {
		font-size: .6rem;
	}

	.count {
		margin-right: .3rem;
		font-size: 1.5rem;
		vertical-align: text-bottom;
	}

	.pics {
		flex: 1;
		float: left;
		height: 7rem;
		overflow: hidden;
		background: #f1f1f1;
	}

	.pic-item {
		float: left;
		width: 3.4rem;
		height: 3.45rem;
		margin: 0 .1rem .1rem 0;

		&:nth-child(4n-3){
			width: 5.15rem;
			height: 3.45rem;
		}
	}

	.pic-width {
		width: 100%;
		height: 100%;
	}
}

.licence-wrapper {
	margin-bottom: 3.5rem;

	.header {
		width: 100%;
		height: 2.5rem;
		padding-left: 1.3rem;
		line-height: 2.5rem;
		font-size: .75rem #333;
		font-weight: 400;
		color: #333;
	}

	.licence-list {
		padding: .2rem;
	}

	.licence-item {
		float: left;
		width: 5.8rem;
		height: 4.7rem;
		margin: 0 .2rem .2rem 0;

		&:nth-child(3n) {
			margin-right: 0;
		}
	}

	.licence-img {
		width: 5.8rem;
		height: 4.7rem;
	}
}

</style>
