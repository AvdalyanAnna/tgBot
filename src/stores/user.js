import { defineStore } from 'pinia'
import {ref} from 'vue'
import user from '@/data/user_data.js'

export const useUserStore = defineStore('user-status', () => {
  // залогинен ли позвователь
  const isLoggedIn = ref(false)
  function updateLoginStatus(newStatus) {
    isLoggedIn.value = newStatus
  }


  //данные пользователя
  const userData = ref(null)
  function loadUserData(){
    const data = user;
    if (data) userData.value = data
  }
  function updateUserData(data) {
    userData.value = data
  }
  

  return { 
    isLoggedIn, 
    updateLoginStatus, 
    userData,
    loadUserData,
    updateUserData
  }
})