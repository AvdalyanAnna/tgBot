<template>
  <div className="template-main ">
    ---- tg ----
    <pre v-if="tg">{{ tg }}</pre>
    <div v-if="userInformation">
      <h2>Информация о пользователе</h2>
      <p>Номер телефона: {{ userInformation.phone }}</p>
      <p>ID пользователя: {{ userInformation.id }}</p>
      <!-- Другие свойства пользователя, которые вы хотите отобразить -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tg: null,
      userInformation: null,
    }
  },
  mounted() {
    this.tg = window?.Telegram?.WebApp;

    // Предположим, что у вас есть метод для получения информации о пользователе
    // Обратитесь к документации Telegram API для правильной реализации
    this.getUserInformation();
  },
  methods: {
    // Пример метода для получения информации о пользователе
    async getUserInformation() {
      // Ваш код для получения информации о пользователе
      // Например, использование Telegram API
      try {
        const response = await this.tg.getUserInformation(); // Замените на реальный метод Telegram API
        this.userInformation = response.data; // Предположим, что информация о пользователе возвращается в формате JSON
      } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
      }
    },
  },
}
</script>
