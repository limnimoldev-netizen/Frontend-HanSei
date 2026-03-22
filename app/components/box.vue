
<script setup >

defineProps({
  title: {
    type: String,
    
  },
  content: {
    type: String,
    required: true
  },

  boxClasses: {
    type: String,
    default: 'px-4 py-2 rounded-xl border border-gray-700 w-70 h-40 justify-center items-center flex shadow-2xl gap-1'
  }
})
</script>

<template>
 
  <div :class="['box-container', boxClasses]">
    <h2 class="text-8xl text-green-700">{{ title }}</h2>
    <p class="text-xl text-[#333]">{{ content }}</p>
    <slot /> 
  </div>
</template>




