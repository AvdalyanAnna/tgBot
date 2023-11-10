<script setup>
import VProductNow from "@/components/product/vProductNow.vue";
import VOffer from "@/components/vOffer.vue";
import VSaveOrder from "@/components/vSaveOrder.vue";
import VHeader from "@/components/vHeader.vue";


</script>
<template>
  <v-header/>
  <div class="wrapper">
    <v-product-now :item="{
    img: '/product-1.png',
    date: '11.9.2023',
    title: 'Консервы',
    percent: 70,
    btn:'Позвать друзей',
    users: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  }"/>
  </div>
  <v-offer title="Предложение:"/>
  <v-save-order/>
</template>