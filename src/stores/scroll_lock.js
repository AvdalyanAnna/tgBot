import { defineStore } from 'pinia'
import {ref} from 'vue'
import isMobileCheck from '@/helpers/is_mobile'
export const useScrollLockStore = defineStore('scroll-lock', () => {
  const isLocked = ref(false)
  const bodyOffset = ref(0)
  const isMobile = isMobileCheck()

  function unlockScroll() {
    if(isLocked.value) {
      isLocked.value = false
      bodyOffset.value = 0
    }
  }

  function lockScroll() {
    if(!isLocked.value) {
      bodyOffset.value = calcPadding()
      isLocked.value = true
    }
  }

  function switchScroll(value) {
    bodyOffset.value = value ? calcPadding() : 0
    isLocked.value = value
  }

  function calcPadding(){
    let padding = 0
    if(document && !isMobile) {
      padding = window.innerWidth - document.body.offsetWidth + "px"
    }
    
    return padding
  }

  const isBurgerMenuActive = ref(false)

  function switchBurgerMenu() {
    isBurgerMenuActive.value = !isBurgerMenuActive.value
  }
  function closeBurgerMenu() {
    isBurgerMenuActive.value = false
  }

  return {isBurgerMenuActive, switchBurgerMenu, closeBurgerMenu, isLocked, bodyOffset, lockScroll, unlockScroll, switchScroll }
})