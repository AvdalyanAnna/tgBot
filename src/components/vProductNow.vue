<script setup>
import {onMounted, ref} from "vue";

const targetDate = new Date('11.9.2023');

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
  <div class="product-card card">
    <div class="product-card-head">
      <h2 class="product-card-title"> Консервы </h2>
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
          <div class="users-item"></div>
          <div class="users-item"></div>
          <div class="users-item"></div>
          <div class="users-item"></div>
          <div class="users-item">23+</div>
        </div>
      </div>
      <div class="product-card-right w-[100%] ml-[16px]" style="width: 100%;">
        <div class="product-card-right-text mb-[9px]">До мин. суммы</div>
        <div class="relative w-full rounded-[2px] h-[4px] bg-neutral">
          <div class="bg-primary h-[4px] rounded-[2px]" style="width: 66%"></div>
          <div class="progress-line-number" style="left: calc(66% - (42px / 2))">
            <svg width="45" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  class="fill-grey"
                  d="M16.7659 29.8166L18.2428 33L21.6365 28.9361C22.3965 28.026 23.5211 27.5 24.7067 27.5H40.7799C42.989 27.5 44.7799 25.7091 44.7799 23.5V4C44.7799 1.79086 42.989 0 40.7799 0H4.8916C2.68246 0 0.891602 1.79086 0.891602 4V23.5C0.891602 25.7091 2.68247 27.5 4.89161 27.5H13.1374C14.6947 27.5 16.1105 28.4039 16.7659 29.8166Z"
                  />
            </svg>
            <span>70%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card-foot">
      <button class="btn">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              fill="#fff"
              d="M19.56 13.51C19.2976 13.4789 19.0335 13.553 18.8255 13.716C18.6175 13.879 18.4825 14.1177 18.45 14.38C18.2357 16.0715 17.4113 17.6267 16.1317 18.7535C14.852 19.8803 13.2051 20.5013 11.5 20.5H5.91002L6.55002 19.87C6.73627 19.6826 6.84081 19.4292 6.84081 19.165C6.84081 18.9008 6.73627 18.6474 6.55002 18.46C5.67411 17.5876 5.04486 16.4988 4.72627 15.3043C4.40768 14.1098 4.41112 12.8522 4.73622 11.6595C5.06133 10.4668 5.69651 9.3814 6.57717 8.51378C7.45784 7.64617 8.55256 7.02726 9.75002 6.72C10.0073 6.6537 10.2277 6.48791 10.3627 6.25912C10.4977 6.03032 10.5363 5.75726 10.47 5.5C10.4037 5.24274 10.2379 5.02236 10.0091 4.88733C9.78034 4.7523 9.50728 4.7137 9.25002 4.78C7.79702 5.15885 6.4619 5.89522 5.36628 6.92203C4.27066 7.94885 3.44937 9.23347 2.97721 10.6589C2.50506 12.0843 2.39705 13.6052 2.66302 15.083C2.929 16.5609 3.56051 17.9487 4.50002 19.12L2.79002 20.79C2.65126 20.9306 2.55726 21.1092 2.51989 21.3032C2.48252 21.4972 2.50344 21.6979 2.58002 21.88C2.65504 22.0626 2.78244 22.2189 2.94616 22.3293C3.10988 22.4396 3.30259 22.499 3.50002 22.5H11.5C13.693 22.5 15.8105 21.6993 17.4548 20.2483C19.0991 18.7973 20.1571 16.7959 20.43 14.62C20.4611 14.3576 20.387 14.0935 20.224 13.8855C20.061 13.6775 19.8223 13.5425 19.56 13.51ZM19.5 7.5C19.0752 7.5014 18.662 7.63799 18.32 7.89L16.57 7.09L18.5 6.21C18.8019 6.39326 19.1469 6.49332 19.5 6.5C19.8956 6.5 20.2823 6.3827 20.6112 6.16294C20.9401 5.94318 21.1964 5.63082 21.3478 5.26537C21.4992 4.89992 21.5388 4.49778 21.4616 4.10982C21.3844 3.72186 21.1939 3.36549 20.9142 3.08579C20.6345 2.80608 20.2782 2.6156 19.8902 2.53843C19.5022 2.46126 19.1001 2.50087 18.7346 2.65224C18.3692 2.80362 18.0568 3.05996 17.8371 3.38886C17.6173 3.71776 17.5 4.10444 17.5 4.5L15.6 5.37C15.278 5.14066 14.8952 5.0119 14.5 5C13.9696 5 13.4609 5.21071 13.0858 5.58579C12.7107 5.96086 12.5 6.46957 12.5 7C12.5 7.53043 12.7107 8.03914 13.0858 8.41421C13.4609 8.78929 13.9696 9 14.5 9C14.8249 8.99673 15.1441 8.91435 15.43 8.76L17.52 9.76C17.57 10.1413 17.7289 10.5002 17.9776 10.7935C18.2264 11.0868 18.5544 11.3022 18.9224 11.4139C19.2905 11.5255 19.6829 11.5287 20.0527 11.423C20.4225 11.3173 20.7539 11.1072 21.0074 10.818C21.2608 10.5287 21.4255 10.1725 21.4816 9.79198C21.5378 9.41151 21.483 9.02291 21.3239 8.67276C21.1649 8.3226 20.9082 8.02574 20.5847 7.81774C20.2612 7.60974 19.8846 7.49942 19.5 7.5Z"
          />
        </svg>
        Позвать друзей
      </button>
    </div>

  </div>
</template>

<style lang="scss">

.product-card{
  &-foot{
    background: #FF0;
  }
}
</style>
