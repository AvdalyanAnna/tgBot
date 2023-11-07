<script setup>
import {ref} from "vue";
import VProductItem from "@/components/product/vProductItem.vue";

const products = ref([
  {
    img:'/assets/img/product-min.jpg',
    title:'Тунец',
    category:'Категория товара',
    price:'185',
    activePrice:true,
    oldPrice:'1 800',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    category:'Категория товара',
    price:'235',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    category:'Категория товара',
    price:'235',
  },
  {
    img:'/assets/img/product-min.jpg',
    title:'Тушенка БРТ',
    category:'Категория товара',
    price:'235',
  }
])
</script>
<template>
  <div class="offer">
    <div class="wrapper">
      <div class="offer-inner">
        <h2 class="offer-title">Предложение:</h2>

        <v-product-item v-for="(item,index) in products" :key="index" :item="item"/>
      </div>
    </div>
  </div>
</template>