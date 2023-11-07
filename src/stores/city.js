import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useCityStore = defineStore('city', () => {
  const choosenCity = ref("Москва")
  function getUserCity() {
    const city = localStorage?.getItem('noproblem_city')
    choosenCity.value = city ? city : "Москва"
  }
  function updateCity(newCity) {
    choosenCity.value = newCity
    localStorage.setItem('noproblem_city', newCity)
  }

  return {getUserCity, updateCity, choosenCity }
})