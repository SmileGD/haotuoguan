<template>
	<div id="app" class="app">
		<tab></tab>
		<!-- 内容 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive> 
	</div>
</template>

<script>
	import tab from './components/tab/tab'
	export default {
		name: 'App',
		components: {
			tab
		}
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

</style>
