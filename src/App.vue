<template>
  <div id="app" class="app">
    <div class='tab'>
      <router-link class='tab-item' to='/index'>
        首页
      </router-link>
      <router-link class='tab-item' to='/dymanic'>
        动态
      </router-link>
      <router-link class='tab-item' to='/campus'>
        校区
      </router-link>
      <router-link class='tab-item' to='/mine'>
        我的
      </router-link>
    </div>
    <!--内容   -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .app {
    position:fixed;
    left:0;
    top:0;
    z-index:3;
    width:100%;
    height:100%;
    overflow:auto;
    background:#f0f0f0;
  }
  .tab {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem;
    background: #fff;

    .tab-item {
      flex: 1;
      text-align: center;
      font-size: .5rem;
      color: rgb(77, 85, 93);
    }

    .router-link-active {
      color: rgb(240, 20, 20);
    }
  }

</style>
