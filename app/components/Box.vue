<script setup>
defineProps({
  img: {
    type: String,
    default: ''
  },
  img2: {
    type: String,
    default: ''
  },
  img3: {
    type: String,
    default: ''
  },

    img4: {
    type: String,
    default: ''
  },

  boxClasses: {
    type: String,
    default: 'px-4 py-2 rounded-xl border border-gray-700 w-70 h-40 flex justify-center items-center shadow-2xl gap-2'
  }
})
</script>

<template>
  <div :class="['box-container', boxClasses]">

    <div class="w-32 h-32">
      <img :src="img" alt="" class="w-full h-full object-cover rounded-lg" />
    </div>

    <div class="w-32 h-32">
      <img :src="img2" alt="" class="w-full h-full object-cover rounded-lg" />
    </div>

    <div class="w-32 h-32">
      <img :src="img3" alt="" class="w-full h-full object-cover rounded-lg" />
    </div>


    <div class="w-32 h-32">
        <img :src="img4" alt="" class="w-full object-cover rounded-lg">
    </div>

    <slot />
  </div>
</template>