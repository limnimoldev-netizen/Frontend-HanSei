<template>
  <tr class="border-2 border-gray-200 bg-secondary text-sm  w-full">

    <!-- Profile -->
    <td class="p-3 flex items-center">
      <img :src="item.img" class="w-15 h-15 rounded-full object-cover  p-1.5" />
      <p class="p-3 font-medium">{{ item.name }}</p>
    </td>

    <td class="p-3">{{ item.position }}</td>
    <td class="p-3">{{ item.Leavetype }}</td>
    <td class="p-3">{{ item.reason }}</td>
    <td class="p-3">{{ item.start_day }}</td>
    <td class="p-3">{{ item.end_day }}</td>
    <td class="p-3">{{ item.Total_day }}</td>
   

  
    <td class="p-3 justify-center">
      <span class="px-2 py-1 rounded-full text-sm"
        :class="{
          'bg-green-100 text-green-600': item.status === 'Approved',
          'bg-red-100 text-red-600': item.status === 'Rejected',
          'bg-yellow-100 text-yellow-600': item.status === 'Pending'
        }">
        {{ item.status }}
      </span>
    </td>

    <td class="p-4 gap-2">

      <button
        @click="handleApprove"
        :disabled="item.status === 'Approved' || loading"
        class="bg-green-50 text-green-600 px-3 py-1 rounded-lg font-bold transition hover:bg-green-600 hover:text-white disabled:opacity-50 "
      >
        <Icon name="material-symbols:check-rounded" class="text-sm " /> <span class="justify-center items-center ">Approve</span>
      </button>

      <button
        @click="handleReject"
        :disabled="item.status === 'Rejected' || loading"
        class="bg-red-50 text-red-600 px-3 py-1 rounded-lg font-bold transition hover:bg-red-600 hover:text-white disabled:opacity-50 "
      >
        <Icon name="material-symbols:close-small-outline" class="text-sm" /> <span>Reject</span> 
      </button>

    </td>
  </tr>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: Object
})

const loading = ref(false)


async function handleApprove() {
  if (!confirm("Are you sure to approve this leave?")) return

  loading.value = true
  props.item.status = "Approved"

  await updateLeave()
  loading.value = false
}


async function handleReject() {
  if (!confirm("Are you sure to reject this leave?")) return

  loading.value = true
  props.item.status = "Rejected"

  await updateLeave()
  loading.value = false
}


// async function updateLeave() {
//   try {
//     await $fetch(`http://127.0.0.1:8000/api/leaves/${props.item.id}`, {
//       method: "PUT",
//       body: {
//         status: props.item.status
//       }
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }
</script>