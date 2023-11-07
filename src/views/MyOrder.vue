<script setup>
import VOrderOffer from "@/components/vOrderOffer.vue";
import VHeader from "@/components/vHeader.vue";


</script>
<template>
  <v-header/>

  <div class="my-order">
    <v-order-offer/>
    <div class="wrapper">
      <div class="save-order-left font-[600] text-[20px] leading-[28px]">
        Итого
        <div class="font-[600] text-[30px] leading-[36px] my-[12px]">12 344₽</div>
      </div>
      <div class="w-full">
        <button class="w-full p-[16px] flex items-center justify-center text-[16px]  leading-[24px] rounded-[8px] ">
          Сохранить
          <svg class="mr-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4107 16.4227C7.08527 16.0972 7.08527 15.5696 7.4107 15.2442L12.6548 10.0001L7.4107 4.756C7.08527 4.43057 7.08527 3.90293 7.4107 3.57749C7.73614 3.25206 8.26378 3.25206 8.58921 3.57749L14.4225 9.41083C14.748 9.73626 14.748 10.2639 14.4225 10.5893L8.58922 16.4227C8.26378 16.7481 7.73614 16.7481 7.4107 16.4227Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

</template>