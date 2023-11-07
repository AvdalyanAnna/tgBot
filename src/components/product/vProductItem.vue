<script setup>
import {defineProps, ref} from  'vue'
 defineProps({
  item:{
    required:true
  },
   canDelete:{
    type:Boolean,
     default:false
   }
})

const count = ref(0)

const decrement = () =>{
  if( count.value !== 0) count.value--
}

const increment = () =>{
  count.value++
}

</script>
<template>
<div class="product-item-order">
  <router-link to="/product"  class="product-item-order__img">
    <img :src="item.img" alt="product-min">
  </router-link>
  <div class="product-item-order_fav">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="fill-black" d="M24.8 11.8417C23.9153 10.9567 22.7423 10.4186 21.4944 10.3253C20.2464 10.232 19.0065 10.5897 18 11.3333C16.9397 10.5447 15.62 10.1871 14.3066 10.3325C12.9932 10.478 11.7837 11.1157 10.9217 12.1172C10.0596 13.1187 9.60902 14.4096 9.66067 15.73C9.71232 17.0504 10.2624 18.3022 11.2 19.2333L17.4083 25.4417C17.4858 25.5198 17.578 25.5818 17.6795 25.6241C17.7811 25.6664 17.89 25.6882 18 25.6882C18.11 25.6882 18.2189 25.6664 18.3205 25.6241C18.422 25.5818 18.5142 25.5198 18.5917 25.4417L24.8 19.2333C25.2856 18.7481 25.6707 18.172 25.9335 17.5378C26.1963 16.9037 26.3316 16.2239 26.3316 15.5375C26.3316 14.8511 26.1963 14.1713 25.9335 13.5372C25.6707 12.9031 25.2856 12.3269 24.8 11.8417ZM23.625 18.0583L18 23.675L12.375 18.0583C11.8793 17.5606 11.5417 16.9275 11.4044 16.2386C11.2671 15.5497 11.3363 14.8356 11.6033 14.1858C11.8703 13.5361 12.3233 12.9797 12.9053 12.5864C13.4873 12.1931 14.1726 11.9804 14.875 11.975C15.8134 11.9773 16.7126 12.352 17.375 13.0167C17.4525 13.0948 17.5446 13.1568 17.6462 13.1991C17.7477 13.2414 17.8567 13.2632 17.9667 13.2632C18.0767 13.2632 18.1856 13.2414 18.2872 13.1991C18.3887 13.1568 18.4809 13.0948 18.5583 13.0167C19.2403 12.4257 20.1213 12.116 21.023 12.15C21.9247 12.1841 22.7798 12.5595 23.4152 13.2002C24.0506 13.8409 24.4188 14.699 24.4454 15.601C24.472 16.503 24.1549 17.3813 23.5583 18.0583H23.625Z"/>
    </svg>
  </div>
  <div class="product-item-order__content">
    <div class="product-item-order__content-left">
      <router-link to="/product"  class="product-item-order__content-title">{{ item.title }}</router-link>
      <div class="product-item-order__content-category">{{ item.category}}</div>
      <div class="flex product-item-order__content-price-flex" >
        <div class="product-item-order__content-price" :class="{active_price:item.activePrice}">{{item.price}}₽</div>
        <div v-if="item.oldPrice" class="product-item-order__content-price_old">{{ item.oldPrice }}₽ </div>
      </div>
      <div class="product-item-order__content-box">
        <div class="custom-number-input h-10 w-32">
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
            <button @click="decrement" data-action="decrement" class="w-[36px] h-[36px] rounded-full p-0  btn-grey text-[#0f172a] cursor-pointer outline-none">
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input v-model="count" min="0" type="number" placeholder="00" maxlength="3" class=" w-[40px] h-[36px]  text-center flex items-center rounded-[8px] mx-[8px]" name="custom-input-number">
            <button @click="increment" data-action="increment" class="w-[36px] h-[36px] rounded-full p-0 bg-primary-color text-[#0f172a] cursor-pointer">
              <span class="m-auto text-2xl font-thin text-white">+</span>
            </button>
          </div>
        </div>
        <div v-if="canelete" class="product-item-order__content-delete">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-black" d="M19.175 17.9999L24.425 12.7582C24.5819 12.6013 24.6701 12.3885 24.6701 12.1666C24.6701 11.9447 24.5819 11.7318 24.425 11.5749C24.2681 11.418 24.0552 11.3298 23.8333 11.3298C23.6114 11.3298 23.3986 11.418 23.2417 11.5749L18 16.8249L12.7583 11.5749C12.6014 11.418 12.3886 11.3298 12.1667 11.3298C11.9447 11.3298 11.7319 11.418 11.575 11.5749C11.4181 11.7318 11.3299 11.9447 11.3299 12.1666C11.3299 12.3885 11.4181 12.6013 11.575 12.7582L16.825 17.9999L11.575 23.2416C11.4969 23.319 11.4349 23.4112 11.3926 23.5128C11.3503 23.6143 11.3285 23.7232 11.3285 23.8332C11.3285 23.9433 11.3503 24.0522 11.3926 24.1537C11.4349 24.2553 11.4969 24.3474 11.575 24.4249C11.6525 24.503 11.7446 24.565 11.8462 24.6073C11.9477 24.6496 12.0566 24.6714 12.1667 24.6714C12.2767 24.6714 12.3856 24.6496 12.4871 24.6073C12.5887 24.565 12.6809 24.503 12.7583 24.4249L18 19.1749L23.2417 24.4249C23.3191 24.503 23.4113 24.565 23.5128 24.6073C23.6144 24.6496 23.7233 24.6714 23.8333 24.6714C23.9433 24.6714 24.0523 24.6496 24.1538 24.6073C24.2554 24.565 24.3475 24.503 24.425 24.4249C24.5031 24.3474 24.5651 24.2553 24.6074 24.1537C24.6497 24.0522 24.6715 23.9433 24.6715 23.8332C24.6715 23.7232 24.6497 23.6143 24.6074 23.5128C24.5651 23.4112 24.5031 23.319 24.425 23.2416L19.175 17.9999Z" />
          </svg>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
