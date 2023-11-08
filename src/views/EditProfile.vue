<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";

const $router = useRouter()

const form = ref({
  surname:'',
  name:'',
  email:'me@ldmco.ru',
  phone:'+7 909 150 3444'
})

const phoneDisabled = ref(true)
const send = () =>{
    $router.push('/edit-address')
}
</script>
<template>
  <div class="auth-page auth-page-form">
    <div class="wrapper flex-1 flex">
      <form class="flex-1 flex flex-col" @submit.prevent="send">
        <div class="flex-1">
          <div class="card">
            <div class=" w-full">
              <div class="card-title">Ваши данные</div>
              <div class="form-edit-flex mr-[-10px]">
                <div class="form-edit-left">
                  <div class="form-input">
                    <input id="surname" type="text" v-model="form.surname" required>
                    <label for="surname" class="form-input-label">Укажите Фамилию</label>
                  </div>
                  <div class="form-input">
                    <input id="name" type="text" v-model="form.name" required>
                    <label for="name" class="form-input-label">Укажите Имя</label>
                  </div>
                </div>
                <div class="form-avatar">
                  <label for="changeAvatar" class="form-avatar-round">
                    M
                  </label>
                  <label for="changeAvatar" class="form-avatar-label">Изменить</label>
                  <input id="changeAvatar" type="file"/>
                </div>
              </div>
            </div>
            <!--        <div class="auth-page-text mt-[12px] mb-[24px]">Код авторизации придет автоматически</div>-->
            <!--        <button class="btn btn-big auth-btn">-->
            <!--          Продолжить-->
            <!--          <svg class="mr-0 ml-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none"-->
            <!--               xmlns="http://www.w3.org/2000/svg">-->
            <!--            <path fill-rule="evenodd" clip-rule="evenodd"-->
            <!--                  d="M7.41075 16.4227C7.08531 16.0972 7.08531 15.5696 7.41075 15.2442L12.6548 10.0001L7.41075 4.756C7.08531 4.43057 7.08531 3.90293 7.41075 3.57749C7.73619 3.25206 8.26382 3.25206 8.58926 3.57749L14.4226 9.41083C14.748 9.73626 14.748 10.2639 14.4226 10.5893L8.58926 16.4227C8.26382 16.7481 7.73619 16.7481 7.41075 16.4227Z"-->
            <!--                  fill="white"/>-->
            <!--          </svg>-->

            <!--        </button>-->
          </div>
          <div class="card">
            <div class=" w-full">
              <div class="card-title">Ваши контакты</div>
              <div class="w-full">
                <div class="form-input">
                  <input id="email" type="text" v-model="form.email" required>
                  <label for="email" class="form-input-label">E-mail</label>
                </div>
                <div class="form-input">
                  <input id="phone" type="text" v-model="form.phone" required :disabled="phoneDisabled">
                  <label for="phone" class="form-input-label" :class="{active : phoneDisabled && form.phone.length > 0 }" >Телефон</label>
                  <div class="form-input-disabled" @click="phoneDisabled = !phoneDisabled">Изменить</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <button  class="btn btn-big auth-btn mt-[24px] mb-[50px]">
          Продолжить
          <svg class="mr-0 ml-[8px]" width="21" height="20" viewBox="0 0 21 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.41075 16.4227C7.08531 16.0972 7.08531 15.5696 7.41075 15.2442L12.6548 10.0001L7.41075 4.756C7.08531 4.43057 7.08531 3.90293 7.41075 3.57749C7.73619 3.25206 8.26382 3.25206 8.58926 3.57749L14.4226 9.41083C14.748 9.73626 14.748 10.2639 14.4226 10.5893L8.58926 16.4227C8.26382 16.7481 7.73619 16.7481 7.41075 16.4227Z"
                  fill="white"/>
          </svg>

        </button>

      </form>

    </div>
  </div>
</template>