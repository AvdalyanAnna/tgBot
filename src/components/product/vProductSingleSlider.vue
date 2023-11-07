<script setup>

import {ref} from 'vue';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const slider = [
  '/assets/img/product.jpg',
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
  'https://swiperjs.com/demos/images/nature-10.jpg',
]
</script>
<template>
  <div class="products-single-slider">
    <div class="wrapper">
      <swiper
          class="products-single-slider-big"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="[FreeMode, Navigation, Thumbs]"
      >
        <swiper-slide v-for="(item,index) in slider" :key="index" class="big-slier">
          <img :src="item" alt="img"/>
        </swiper-slide>
      </swiper>
      <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="[FreeMode, Navigation, Thumbs]"
          class="mySwiper"
      >
        <swiper-slide v-for="(item,index) in slider" :key="index" class="small-slier">
          <img :src="item" alt="img"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.products-single-slider{
  margin: 24px 0;
  &-big{
    margin-bottom: 24px;
  }
}
.big-slier{
  height: 365px;
  width: 100%;
  border-radius: 12px;
  img {
    width: 100%;
    height: 100%;
    background: var(--tg-theme-secondary-bg-color, #fff);
    border-radius: 12px;
    object-fit: cover;
  }
}
.small-slier{
  img{
    border-radius: 12px;
  }
  @media screen and (max-width: 450px) {
    height: 55px;
    img{
      width: 100%;
      height: 100%;
      background: var(--tg-theme-secondary-bg-color, #fff);
      object-fit: cover;
    }

  }
}
</style>