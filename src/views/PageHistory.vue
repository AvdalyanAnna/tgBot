<script setup>
import VHeader from "@/components/vHeader.vue";
import VTabs from "@/components/ui/vTabs.vue";
import VHistoryItem from "@/components/vHistoryItem.vue";
import {ref} from "vue";

const nav = [
  {
    name: 'Заказы',
    link: '/history',
  },
  {
    name: 'Оплаты',
    link: '/payments',
  }
]
const list = ref([
  {
    name:'Заказ №3492',
    price:'2 233₽',
    date:'03.23',
    link:'#'
  },
  {
    name:'Заказ №3492',
    price:'2 233₽',
    date:'03.23',
    link:'#'
  },
  {
    name:'Заказ №3492',
    price:'2 233₽',
    date:'03.23',
    link:'#'
  },
  {
    name:'Заказ №3492',
    price:'2 233₽',
    date:'03.23',
    link:'#'
  },
  {
    name:'Заказ №3492',
    price:'2 233₽',
    date:'03.23',
    link:'#'
  },
])
</script>
<template>
  <v-header/>
  <div class="offer">
    <div class="wrapper">
      <div class="offer-inner">
        <h2 class="offer-title offer-title-big">История</h2>
        <v-tabs :tabs="nav"/>
        <v-history-item v-for="(item,index) in list" :key="index" :item="item" />
      </div>
    </div>
  </div>


</template>