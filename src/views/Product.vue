<script setup>
import VHeader from "@/components/vHeader.vue";
import {ref} from 'vue';
import VProductSingleSlider from "@/components/product/vProductSingleSlider.vue";

const count = ref(12)

const decrement = () =>{
  if( count.value !== 0) count.value--
}

const increment = () =>{
  count.value++
}
</script>
<template>
  <v-header/>
  <div class="wrapper">
    <v-product-single-slider/>
    <div class="offer-inner">
      <h2 class="title mb-[24px]">Кукуруза Бондюэль</h2>
    </div>
    <div class="single-product-card">
      <div class="single-product-price__block">
        <div class="single-product-price__block-left">
          <div class="single-product-price__block-text">
            ЦЕНА
          </div>
          <div class="single-product-price">
            <span class="old">123₽</span>
            <span class="bold">123₽</span>
          </div>
        </div>
        <div class="single-product-price__block-right">
          <div class="custom-number-input h-[44px] w-[190px]">
            <div class="flex flex-row h-[44px] w-full rounded-lg relative bg-transparent">
              <button @click="decrement" data-action="decrement" class="w-[44px] h-[44px] rounded-full p-0  btn-grey text-[#0f172a] cursor-pointer outline-none">
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input v-model="count" min="0" type="number" placeholder="00" maxlength="3" class=" w-[85px] h-[44px] px-[12px] py-[10px] flex items-center rounded-[8px] mx-[8px]" name="custom-input-number">
              <button @click="increment" data-action="increment" class="w-[44px] h-[44px] rounded-full p-0 bg-primary-color text-[#0f172a] cursor-pointer">
                <span class="m-auto text-2xl font-thin text-white">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class=" mt-[22px] btn btn-big">В заказ</button>
    </div>
    <div class="single-product-card">
      Компания РОСВПК осуществляет оптовые продажи товаров и продукции стратегического назначения со склада в Москве.
      Все продукты питания высокого качества изготовленные для Госрезерва. Тушенка, рыбные и мясные консервы, овощная и
      фруктовая консервация, готовые блюда, молочная и колбасная продукция, сахар, макаронные изделия, масла, соуса
      произведенные для Росрезерва соответствуют ГОСТ и изготавливаются из высококачественных компонентов и сырья,
      российских и белорусских производителей.
    </div>
  </div>
</template>