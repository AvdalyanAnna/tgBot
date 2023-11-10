
<script setup>
import VProductNow from "@/components/product/vProductNow.vue";
import VOffer from "@/components/vOffer.vue";
import VSaveOrder from "@/components/vSaveOrder.vue";
import VHeader from "@/components/vHeader.vue";
import VCategories from "@/components/vCategories.vue";

const products = [
  {
    img: '/product-1.png',
    date: '11.9.2023',
    title: 'Консервы',
    percent: 70,
    users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  },
  {
    img: '/product-2.png',
    date: '11.9.2023',
    title: 'Консервы',
    percent: 70,
    users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  }
]

</script>
<template>
  <v-header/>
  <div class="wrapper">
    <div class="block-header flex items-center justify-between">
      <h1 class="title-sub">Совместные закупки</h1>
      <router-link to="/shop" class="block-link">Все</router-link>
    </div>
    <div class="product-card-list">

      <v-product-now
          v-for="(item,index) in products"
          :key="index"
          :more="true" :item="item"/>
    </div>
    <div class="block-header flex items-center justify-between">
      <h1 class="title-sub">Популярные категории</h1>
      <router-link to="/shop" class="block-link">Все</router-link>
    </div>
    <v-categories />
  </div>
  <v-offer :title="'Наличите товаровx'"/>
  <v-save-order/>
</template>