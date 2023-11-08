<template>
  <form class=" recover-password" @submit="send">
      <span class="recover-password__title" v-if="errors">
        Отправили SMS с кодом на телефон:
        <br> +7 *** *** 27–79
        </span>
    <span class="recover-password__title" v-else>
           Попробуйте ввести еще раз
        </span>
    <label class="recover__label" :class="{'has-errors':errors}">
      <input
          v-for="(item,index) in amount"
          :key="index"
          ref="currentIndex"
          v-model="code[item - 1]"
          v-maska data-maska="#"
          class="modal__input"
          maxlength="1"
          type="number"
          @paste="handlePaste"
          @keyup="handleInput($event, item - 1)"
          @change="handleInput($event, item - 1)"
          @keyup.delete="onDelete($event, item - 1)"
          @keyup.enter="confirm"
          :max="9"
      >
    </label>
    <!--    <span  class="recover__btn" @click.stop="">{{ $getMinutes(currentTime) }}</span>-->
    <span v-if="currentTime > 0" class="recover__notcode cursor-pointer mb-[24px]" @click="notGoCode">
      Не пришел код?
    <br>Отправить повторно через {{ $getMinutes(currentTime) }} сек
    </span>

    <span v-else class="recover__btn cursor-pointer mb-[24px]" @click="repeatVerification()">Отправить еще раз</span>

    <button type="submit" class="btn btn-big auth-btn">
      Продолжить
      <svg class="mr-0 ml-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.41075 16.4227C7.08531 16.0972 7.08531 15.5696 7.41075 15.2442L12.6548 10.0001L7.41075 4.756C7.08531 4.43057 7.08531 3.90293 7.41075 3.57749C7.73619 3.25206 8.26382 3.25206 8.58926 3.57749L14.4226 9.41083C14.748 9.73626 14.748 10.2639 14.4226 10.5893L8.58926 16.4227C8.26382 16.7481 7.73619 16.7481 7.41075 16.4227Z"
              fill="white"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: 'vAuthCode',
  props: {
    title: {
      type: String,
      default: ' Введите код из телефон'
    }
  },
  data() {
    return {
      amount: 6,
      code: [],
      currentIndex: 0,
      repeatTime: 2,
      currentTime: null,
      timer: null,
      loading: false,
      errors: null,
    }
  },
  computed: {
    codeNumbers() {
      let code = '';
      this.code.forEach(index => code += index)
      return code;
    }
  },
  watch: {
    currentIndex(val) {
      if (this.amount !== val) {
        this.$refs.currentIndex[val > 0 ? val : 0].focus();
      }
      this.$emit('update:modelValue', this.codeNumbers);
    },
    currentTime(time) {
      if (time === 0) this.stopTimer()
    },
  },
  mounted() {
    this.currentTime = this.repeatTime
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  methods: {
    validateNumber(val) {
      return val.replace(/\D/g, '');
    },
    handlePaste(e) {
      e.preventDefault();
      const text = e.clipboardData.getData('text');
      let code = [];
      this.currentIndex = 0;
      for (const i in text) {
        let value = this.validateNumber(text[i]);
        code[this.currentIndex] = value;
        e.target.value = value;
        if (this.currentIndex + 1 >= this.amount) {
          break;
        }
        this.currentIndex++;
      }
      this.code = code;
      return true;
    },
    handleInput(e, index) {
      e.target.value = this.validateNumber(e.target.value);
      if (e.target.value !== '') {
        this.currentIndex = index + 1;
      }
    },
    onDelete(e, index) {
      if (e.target.value === '') {
        this.currentIndex = index - 1;
      } else {
        this.code[index] = '';
        this.currentIndex = index - 1;
        this.$refs.currentIndex[0].focus();
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
    repeatCounter(e) {
      e.preventDefault()
      this.stopTimer()
      this.currentTime = this.repeatTime
      this.startTimer()
    },
    $getMinutes(duration) {
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";

      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    },
    repeatVerification() {
      this.currentTime = this.repeatTime
      this.stopTimer()
      this.startTimer()
    },
    async send(e) {
      e.preventDefault()
      console.log(this.code.length,this.amount)
      if (this.code.length === this.amount) {
        this.$router.push('/code-ok')
      } else {
        this.errors = true
      }
    },
    async notGoCode() {
      this.currentIndex = 0
      this.code = []
      this.repeatVerification()
    }

  },

}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
}

.registration-form__info {
  text-align: center;

  span, a {
    margin-top: 5px;
    display: inline-block;
    color: #000;
    font-weight: 600;
  }

}

.recover__label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 24px 0;


  input {
    max-width: 41px;
    height: 44px;
    width: 100%;
    border: 0;
    border-radius: 0;
    text-align: center;
    border-bottom: 1px solid var(--basic-day-supporting, #9BADCA);
  }

  &.has-errors {
    input {
      border-color: #F04A49;
    }
  }
}

.recover-password {
  &__title {
    display: block;
    color: var(--on-color-day-variant-1, #0A0522);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
}

.recover__notcode {
  display: block;
  color: var(--on-color-day-variant-1-secondary, #3B4E6A);
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
}

.recover__btn {
  display: block;
  text-align: center;
  color: var(--tg-theme-button-color, #2F80ED);
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
}
</style>

