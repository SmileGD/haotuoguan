<template>
	<div id="app" class="app">
		<div class='tab'>
			<router-link class='tab-item' to='/index'>
				<div class="tab_icon icon_index"></div>
				首页
			</router-link>
			<router-link class='tab-item' to='/growth'>
				<div class="tab_icon icon_dymanic"></div>
				动态
			</router-link>
			<router-link class='tab-item' to='/campus'>
				<div class="tab_icon icon_campus"></div>
				校区
			</router-link>
			<router-link class='tab-item' to='/mine'>
				<div class="tab_icon icon_mine"></div>
				我的
			</router-link>
		</div>
		<!-- 内容 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive> 
	</div>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.app {
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		overflow:auto;
		background:#f0f0f0;
	}

	.tab {
		z-index: 99;
		position: fixed;
		display: flex;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: #fff;
		border-top: 1px solid #eee;

		.tab-item {
			flex: 1;
			text-align: center;
			font-size: .5rem;
			color: rgb(77, 85, 93);
		}

		.tab_icon {
			width: 1.25rem;
			height: 1.25rem;
			margin: .3rem auto .2rem;
			background-size: 1.25rem 1.25rem;
		}

		.icon_index {
			background-image: url('./common/img/index.png');
		}

		.icon_dymanic {
			background-image: url('./common/img/campus.png');
		}

		.icon_campus {
			background-image: url('./common/img/campus.png');
		}

		.icon_mine {
			background-image: url('./common/img/mine.png');
		}

		.router-link-active {
			color: rgb(240, 20, 20);

			.icon_index {
				background-image: url('./common/img/index_active.png');
			}

			.icon_dymanic {
				background-image: url('./common/img/campus_active.png');
			}

			.icon_campus {
				background-image: url('./common/img/campus_active.png');
			}

			.icon_mine {
				background-image: url('./common/img/mine_active.png');
			}
		}
	}

</style>
