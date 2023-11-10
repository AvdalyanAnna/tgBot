<script setup>
const categories = [
  {
    name: 'Консервы'
  },
  {
    name: 'Фрукты'
  },
  {
    name: 'Овощи'
  },
  {
    name: 'Овощи'
  }
]
</script>

<template>
  <div class="v-categories">
    <router-link to="#"
                 v-for="(item,index) in categories" :key="index" class="v-category">
      {{ item.name }}
    </router-link>
  </div>
</template>