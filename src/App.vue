<template>
  <div class="template-main ">
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tg: null,
      colors: {
        "section_header_text_color": "#6d6d72",
        "button_text_color": "#ffffff",
        "subtitle_text_color": "#8e8e93",
        "button_color": "#007aff",
        "secondary_bg_color": "#efeff4",
        "text_color": "#000000",
        "section_bg_color": "#ffffff",
        "hint_color": "#8e8e93",
        "destructive_text_color": "#ff3b30",
        "bg_color": "#ffffff",
        "link_color": "#007aff",
        "header_bg_color": "#f8f8f8",
        "accent_text_color": "#007aff"
      },
      colors1: {
        "secondary_bg_color": "#1c1c1d",
        "text_color": "#ffffff",
        "link_color": "#3e88f7",
        "button_text_color": "#ffffff",
        "accent_text_color": "#3e88f7",
        "button_color": "#3e88f7",
        "header_bg_color": "#1a1a1a",
        "section_bg_color": "#2c2c2e",
        "section_header_text_color": "#8d8e93",
        "bg_color": "#000000",
        "destructive_text_color": "#eb5545",
        "subtitle_text_color": "#98989e",
        "hint_color": "#98989e"
      }
    }
  },
  mounted() {
    this.tg = window?.Telegram?.WebApp
  },
}
</script>

<style lang="scss">
@import "assets/css/style.scss";
</style>
