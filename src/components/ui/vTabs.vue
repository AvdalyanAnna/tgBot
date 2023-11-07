<script setup>
import {useRoute} from "vue-router";
const $route = useRoute()
const props = defineProps({
  tabs: {
    type: Array,
    default: []
  },
  link: {
    type: String,
    default: '/'
  }

})
</script>

<template>
  <div>
    <div class="block mb-6">
      <div class="border-b border-solid border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <router-link v-for="tab in tabs" :key="tab.name" :to="tab.link"
                       :class="[
                           tab.link === $route.path ? 'tab-active' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                           'w-1/2 border-b-2 py-4 px-1 text-center text-sm font-medium']"
                       :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.tab-active{
  border-bottom: 2px solid var(--tg-theme-button-color, #2F80ED);
  color: var(--tg-theme-button-color, #2F80ED);
}
</style>