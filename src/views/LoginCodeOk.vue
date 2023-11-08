<script setup>
import {useRouter} from "vue-router";

const $router = useRouter()
const changePage = () => {
  $router.push('/edit-profile')
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
          <div class="code-save">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M49.8934 19.2268C49.6455 18.9768 49.3505 18.7785 49.0256 18.6431C48.7006 18.5077 48.3521 18.438 48 18.438C47.648 18.438 47.2994 18.5077 46.9745 18.6431C46.6495 18.7785 46.3546 18.9768 46.1067 19.2268L26.24 39.1201L17.8934 30.7468C17.636 30.4981 17.3321 30.3026 16.9992 30.1714C16.6662 30.0402 16.3107 29.9759 15.9529 29.9821C15.5951 29.9883 15.242 30.0649 14.9138 30.2075C14.5856 30.3502 14.2887 30.5561 14.04 30.8135C13.7914 31.0708 13.5959 31.3747 13.4647 31.7076C13.3335 32.0406 13.2691 32.3961 13.2753 32.7539C13.2815 33.1117 13.3581 33.4648 13.5008 33.793C13.6434 34.1212 13.8493 34.4181 14.1067 34.6668L24.3467 44.9068C24.5946 45.1567 24.8895 45.3551 25.2145 45.4905C25.5394 45.6259 25.888 45.6956 26.24 45.6956C26.5921 45.6956 26.9406 45.6259 27.2656 45.4905C27.5905 45.3551 27.8855 45.1567 28.1334 44.9068L49.8934 23.1468C50.164 22.8971 50.3801 22.594 50.5278 22.2567C50.6756 21.9193 50.7519 21.5551 50.7519 21.1868C50.7519 20.8185 50.6756 20.4542 50.5278 20.1169C50.3801 19.7796 50.164 19.4765 49.8934 19.2268Z"
                  fill="#0F172A"/>
            </svg>
            <div class="code-save-text">
              Авторизавция пройдена
            </div>
          </div>


          <button class="btn btn-big auth-btn" @click="changePage">
            Продолжить
            <svg class="mr-0 ml-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.41075 16.4227C7.08531 16.0972 7.08531 15.5696 7.41075 15.2442L12.6548 10.0001L7.41075 4.756C7.08531 4.43057 7.08531 3.90293 7.41075 3.57749C7.73619 3.25206 8.26382 3.25206 8.58926 3.57749L14.4226 9.41083C14.748 9.73626 14.748 10.2639 14.4226 10.5893L8.58926 16.4227C8.26382 16.7481 7.73619 16.7481 7.41075 16.4227Z"
                    fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.code-save {
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
  }

  &-text {
    margin: 24px 0;
    color: var(--on-color-day-variant-1, #0A0522);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>