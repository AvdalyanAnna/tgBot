<script setup>
import vAuthCode from "@/components/vAuthCode.vue"

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
          <vAuthCode />
        </div>
      </div>
    </div>
  </div>
</template>