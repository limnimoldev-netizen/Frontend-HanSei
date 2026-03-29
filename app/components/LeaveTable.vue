<template>
  <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
    <td class="p-4">
      <div class="flex items-center gap-3">
        <img :src="item.user?.profile_picture || 'https://i.pravatar.cc/100?img=3'" class="w-10 h-10 rounded-full border" />
        <span class="font-bold text-slate-700">{{ item.user?.name || 'User ' + item.user_id }}</span>
      </div>
    </td>

    <td class="p-4 text-sm font-semibold text-blue-600 uppercase">{{ item.leave_type }}</td>
    
    <td class="p-4 text-sm text-slate-500 italic">"{{ item.reason }}"</td>

    <td class="p-4 text-sm">{{ item.start_date }}</td>
    <td class="p-4 text-sm">{{ item.end_date }}</td>

    <td class="p-4 text-center font-bold text-primary">{{ item.total_days }}</td>

    <td class="p-4 text-center">
      <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase border"
        :class="{
          'bg-orange-50 text-orange-600 border-orange-100': item.status === 'pending',
          'bg-emerald-50 text-emerald-600 border-emerald-100': item.status === 'approved',
          'bg-rose-50 text-rose-600 border-rose-100': item.status === 'rejected'
        }">
        {{ item.status }}
      </span>
    </td>

    <td class="p-4 text-right">
      <div v-if="item.status === 'pending'" class="flex gap-2 justify-end">
        <button @click="updateStatus('approved')" class="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg font-bold text-xs border border-emerald-100 hover:bg-emerald-600 hover:text-white transition">Approve</button>
        <button @click="updateStatus('rejected')" class="bg-rose-50 text-rose-600 px-3 py-1 rounded-lg font-bold text-xs border border-rose-100 hover:bg-rose-600 hover:text-white transition">Reject</button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import axios from 'axios';
const props = defineProps({ item: Object });
const emit = defineEmits(['refresh']);

async function updateStatus(newStatus) {
  try {
    // Sends the PUT request to Laravel
    await axios.put(`http://127.0.0.1:8000/api/leaves/${props.item.id}`, { status: newStatus });
    emit('refresh'); // Refresh the table
  } catch (error) {
    alert("Database update failed");
  }
}
</script>