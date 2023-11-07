<script setup>
import {ref} from "vue";
import VProductItem from "@/components/product/vProductItem.vue";

const products = ref([
  {
    img:'/assets/img/product-min.jpg',
    title:'Тунец',
    price:'185',
    oldPrice:'235',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    price:'235',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    price:'235',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    price:'235',
  }
])
</script>
<template>
  <div class="offer">
    <div class="wrapper">
      <div class="offer-inner">
        <h2 class="offer-title offer-title-big">Мой заказ</h2>

        <v-product-item v-for="(item,index) in products" :key="index" :item="item" canDelete/>
      </div>
    </div>
  </div>
</template>