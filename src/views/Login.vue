<script setup>
import {useRouter} from "vue-router";

const $router = useRouter()
const changePage = () => {
  $router.push('/code')
}
</script>
<template>
  <div class="auth-page">
    <div class="wrapper">
      <div class="auth-page-inner">
        <div class="auth-page-top">
          <div class="auth-page-top-title">
            Авторизация
          </div>
        </div>
        <div class="auth-page-content">
          <div>
            <div class="flex">
              <span class="auth-phone-info inline-flex items-center">
                <img src="/assets/img/flag.svg" alt="flag">
                +7
              </span>
              <input type="text" name="company-website" id="company-website"
                     class="auth-phone-input"
                     placeholder="(____) - ___ - ___"/>
            </div>
            <div class="auth-page-text mt-[12px] mb-[24px]">Код авторизации придет автоматически</div>
            <button class="btn btn-big auth-btn" @click="changePage">
              Продолжить
              <svg class="mr-0 ml-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41075 16.4227C7.08531 16.0972 7.08531 15.5696 7.41075 15.2442L12.6548 10.0001L7.41075 4.756C7.08531 4.43057 7.08531 3.90293 7.41075 3.57749C7.73619 3.25206 8.26382 3.25206 8.58926 3.57749L14.4226 9.41083C14.748 9.73626 14.748 10.2639 14.4226 10.5893L8.58926 16.4227C8.26382 16.7481 7.73619 16.7481 7.41075 16.4227Z" fill="white"/>
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>