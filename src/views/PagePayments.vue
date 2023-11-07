<script setup>
import VHeader from "@/components/vHeader.vue";
import VTabs from "@/components/ui/vTabs.vue";


</script>
<template>
  <v-header/>
  <div class="offer">
    <div class="wrapper">
      <div class="offer-inner">
        <h2 class="offer-title offer-title-big">История</h2>
        <v-tabs :tabs="[
      {
        name:'Заказы',
        link:'/history',
      },
      {
        name:'Оплаты',
        link:'/payments',
      }
  ]" />
      </div>
    </div>
  </div>



</template>