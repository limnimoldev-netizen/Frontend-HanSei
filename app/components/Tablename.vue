<template>
  <tr>
    <td class="p-4">{{ name }}</td>
    <td class="p-4">{{ position }}</td>
    <td class="p-4">{{ leavetype }}</td>
    <td class="p-4">{{  reason }}</td>
    <td class="p-4">{{ start }}</td>
    <td class="p-4">{{ end }}</td>
    <td class="p-4">{{ day }}</td>
    <td class="p-3">
      <span :class="statusClass">
        {{ status }}
      </span>
    </td>
    <td class="p-3 flex gap-2">
      <button class="bg-primary text-[#fff] px-3 py-1 rounded text-xs hover:bg-gray-700">Approve</button>
      <button class="border-xl text-white px-3 py-1 rounded text-xs border-2xl">Reject</button>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  name: String,
  position: String,
  leavetype:String,
  reason: String,
  start: String,
  end: String,
  day:String,
  status: String,
});


const statusClass = computed(() => {
  return props.status === 'Pending' 
    ? 'bg-yellow-700 text-[#fff] px-3 py-1 rounded-full text-xs' 
    : 'bg-green-700 text-[#fff] px-3 py-1 rounded-full text-xs';
});
</script>
