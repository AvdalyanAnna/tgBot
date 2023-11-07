<script setup>
const menu = [
  {
    icon: '/assets/icon/story.svg',
    text: 'История',
    to:'/history'
  },
  {
    icon: '/assets/icon/profile.svg',
    text: 'Профиль',
    to:'/login'
  },
  {
    icon: '/assets/icon/my_order.svg',
    text: 'Мой заказ',
    to:'/order'
  },
]
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <nav class="header-inner">
        <ul class="header-list">
          <li class="header-item" v-for="(item,index) in menu" :key="index">
            <router-link :to="item.to" class="header-link">
              <img v-if="item.icon" alt="icon" :src="item.icon">
              <span>{{ item.text }} </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;

}
.header-list {
  display: flex;
  justify-content: space-between;
}
.header-link{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
}
.header-item{
  margin: 0 5px;
  width: 100%;
  display: flex;
  height: 66px;
  gap: 0;
  padding: 7px 24px 8px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--neutral-400, #94A3B8);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}
.header-item img{
  margin-bottom: 1px;
  width: 24px;
  height: 24px;
}
.header-item:nth-child(1){
  margin-left: 0;
}
.header-item:nth-last-child(1){
  margin-right: 0;
}
</style>