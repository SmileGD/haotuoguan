<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :style="{ backgroundImage: 'url(' + banner.url + ')' }">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.min.js';
  import 'swiper/dist/css/swiper.min.css';
  import a from './m-banner01.png';
  import b from './m-banner02.png';
  export default {
    data(){
      return {
        banners:[
          {url:a},
          {url:b}
        ]
      }
    },
    mounted(){
      let swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: true,
        onTouchEnd: function() {
          swiper.startAutoplay();
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .index {
    padding-bottom: 3.6rem;
  }

  .swiper-container {
    width: 100%;
    height: 8.5rem;

    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      width: .5rem;
      height: .5rem;
      color: #00f;
    }
    .swiper-pagination-bullet {
      width: 0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: #7c5e53;
    }
  }
</style>
