<template>

<h1>Hello Mony</h1>



</template>
<script setup>
import axios from 'axios';
const rosters = ref([])

const getRosters = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/rosters')
  rosters.value = res.data.data
}

</script>