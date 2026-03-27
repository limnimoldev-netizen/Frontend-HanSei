
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
    default: 'px-4 py-2 rounded-xl  border-4 border-primary w-60 h-30 justify-center items-center flex shadow-md gap-1'
  }
})
</script>

<template>
 
  <div :class="['box-container', boxClasses]">
    <h2 class="text-5xl text-primary">{{ title }}</h2>
    <p class=" font-bold text-[#333]">{{ content }}</p>
    <slot /> 
  </div>
</template>




