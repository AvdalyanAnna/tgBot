<script setup>
import {onMounted, ref,defineProps} from "vue";
const props = defineProps({
  item:{
    required:true
  },
  more:{
    type:Boolean,
    default:false
  }
})

const targetDate = new Date(props.item.date);

const timer = ref({
  days: '00',
  hours: '00',
  minutes: '00',
});

const calculateTimeRemaining = (target) => {
  const currentTime = new Date();
  const timeDifference = target - currentTime;
  if (timeDifference > 0) {
    const totalMinutes = Math.floor(timeDifference / (1000 * 60));
    const totalHours = Math.floor(totalMinutes / 60);
    timer.value.days = String(Math.floor(totalHours / 24)).padStart(2, '0');
    timer.value.hours = String(totalHours % 24).padStart(2, '0');
    timer.value.minutes = String(totalMinutes % 60).padStart(2, '0');
  } else {
    timer.value.days = '00'
    timer.value.hours = '00'
    timer.value.minutes = '00'
  }
}

const updateTimer = () => {
  calculateTimeRemaining(targetDate);
}

onMounted(() => {
  setInterval(updateTimer, 1000);
  updateTimer();
});

</script>

<template>
  <div class="product-card" :class="[{list:more}]">
    <div class="product-card-photo">
      <img :src="`/assets/img/${item.img}`" alt="">
    </div>
    <div class="product-card-inner">
      <div class="product-card-head">
        <h2 class="product-card-title"> {{ item.title }} </h2>
        <div class="product-card-timer">
          <div class="product-card-day product-card-timer-item">{{ timer.days }}</div>
          <span>:</span>
          <div class="product-card-hour product-card-timer-item">{{ timer.hours }}</div>
          <span>:</span>
          <div class="product-card-min product-card-timer-item">{{ timer.minutes }}</div>
        </div>
      </div>
      <div class="product-card-main flex justify-between items-end">
        <div class="product-card-left">
          <div class="users-list">
            <div v-if="item.users.length > 1" class="users-item"></div>
            <div v-if="item.users.length > 2" class="users-item"></div>
            <div v-if="item.users.length > 3" class="users-item"></div>
            <div v-if="item.users.length > 4" class="users-item"></div>
            <div v-if="item.users.length > 5" class="users-item">{{ item.users.length }}+</div>
          </div>
        </div>
        <div class="product-card-right w-[100%] ml-[16px]" style="width: 100%;">
          <div class="product-card-right-text mb-[9px]">До мин. суммы</div>
          <div class="relative w-full rounded-[2px] h-[4px] bg-neutral">
            <div class="bg-primary h-[4px] rounded-[2px]" :style="`width: ${item.percent}%`"></div>
            <div class="progress-line-number" :style="`left: calc(${item.percent}% - (42px / 2))`">
              <svg width="45" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    class="fill-grey"
                    d="M16.7659 29.8166L18.2428 33L21.6365 28.9361C22.3965 28.026 23.5211 27.5 24.7067 27.5H40.7799C42.989 27.5 44.7799 25.7091 44.7799 23.5V4C44.7799 1.79086 42.989 0 40.7799 0H4.8916C2.68246 0 0.891602 1.79086 0.891602 4V23.5C0.891602 25.7091 2.68247 27.5 4.89161 27.5H13.1374C14.6947 27.5 16.1105 28.4039 16.7659 29.8166Z"
                />
              </svg>
              <span>{{item.percent}}%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="product-card-foot" v-if="item.btn">
        <button class="btn">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.60002 7.8001C9.58825 7.8001 11.2 6.18832 11.2 4.2001C11.2 2.21187 9.58825 0.600098 7.60002 0.600098C5.6118 0.600098 4.00002 2.21187 4.00002 4.2001C4.00002 6.18832 5.6118 7.8001 7.60002 7.8001Z" fill="white"/>
            <path d="M7.60002 10.2001C11.5765 10.2001 14.8 13.4236 14.8 17.4001H0.400024C0.400024 13.4236 3.62357 10.2001 7.60002 10.2001Z" fill="white"/>
            <path d="M17.2 5.4001C17.2 4.73736 16.6628 4.2001 16 4.2001C15.3373 4.2001 14.8 4.73736 14.8 5.4001V6.6001H13.6C12.9373 6.6001 12.4 7.13735 12.4 7.8001C12.4 8.46284 12.9373 9.0001 13.6 9.0001H14.8V10.2001C14.8 10.8628 15.3373 11.4001 16 11.4001C16.6628 11.4001 17.2 10.8628 17.2 10.2001V9.0001H18.4C19.0628 9.0001 19.6 8.46284 19.6 7.8001C19.6 7.13736 19.0628 6.6001 18.4 6.6001H17.2V5.4001Z" fill="white"/>
            <path d="M7.60002 7.8001C9.58825 7.8001 11.2 6.18832 11.2 4.2001C11.2 2.21187 9.58825 0.600098 7.60002 0.600098C5.6118 0.600098 4.00002 2.21187 4.00002 4.2001C4.00002 6.18832 5.6118 7.8001 7.60002 7.8001Z" stroke="#FBF7FF"/>
            <path d="M7.60002 10.2001C11.5765 10.2001 14.8 13.4236 14.8 17.4001H0.400024C0.400024 13.4236 3.62357 10.2001 7.60002 10.2001Z" stroke="#FBF7FF"/>
            <path d="M17.2 5.4001C17.2 4.73736 16.6628 4.2001 16 4.2001C15.3373 4.2001 14.8 4.73736 14.8 5.4001V6.6001H13.6C12.9373 6.6001 12.4 7.13735 12.4 7.8001C12.4 8.46284 12.9373 9.0001 13.6 9.0001H14.8V10.2001C14.8 10.8628 15.3373 11.4001 16 11.4001C16.6628 11.4001 17.2 10.8628 17.2 10.2001V9.0001H18.4C19.0628 9.0001 19.6 8.46284 19.6 7.8001C19.6 7.13736 19.0628 6.6001 18.4 6.6001H17.2V5.4001Z" stroke="#FBF7FF"/>
          </svg>
          {{ item.btn }}
        </button>
      </div>
    </div>


  </div>
</template>

