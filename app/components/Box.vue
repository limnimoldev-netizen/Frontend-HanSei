<script setup>
defineProps({
  img: {
    type: String,
    default: ''
  },

  boxClasses: {
    type: String,
    default: 'px-4 py-2 rounded-xl  w-70 h-40 flex justify-center items-center shadow-2xl gap-2'
  }
})
</script>

<template>
  <div :class="['box-container', boxClasses]">

  
      <img :src="img" alt="" class="w-full h-full object-cover rounded-lg" />
    

    <slot />
  </div>
</template>