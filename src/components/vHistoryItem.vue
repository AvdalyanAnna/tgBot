<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>
<template>
  <div class="history-item card">
    <div class="history-item-left">
      <h2 class="history-item-title">{{item.name}}</h2>
      <div class="history-item-price">{{ item.price }}</div>
      <span class="history-item-date">{{item.date}}</span>
    </div>
    <div class="history-item-right">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L16 12L9 19" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
  </div>
</template>

<style lang="scss">
.history-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 12px 16px;
  margin-bottom: 10px;
  &-left{
    color: var(--neutral-900, #0F172A);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  &-right{}
  &-title{}
  &-price{
    font-weight: 700;
    margin-bottom: -5px;
  }
  &-date{
    color: var(--neutral-900, #0F172A);
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
}
</style>