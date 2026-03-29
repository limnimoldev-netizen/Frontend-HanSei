<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useCookie } from '#imports';

const tokenCookie = useCookie('auth_token');
const loading = ref(false);
const message = ref('');

const form = ref({
  leave_type: 'Sick Leave',
  reason: '',
  start_date: '',
  end_date: '',
});

// Calculate total days on the fly so the user can see it
const totalDaysRequested = computed(() => {
  if (!form.value.start_date || !form.value.end_date) return 0;
  
  const start = new Date(form.value.start_date);
  const end = new Date(form.value.end_date);
  
  // Calculate difference in milliseconds and convert to days
  const diffTime = end - start;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 
  
  return diffDays > 0 ? diffDays : 0;
});

const submitLeave = async () => {
  if (totalDaysRequested.value <= 0) {
    message.value = "❌ End date must be after start date.";
    return;
  }

  loading.value = true;
  message.value = "";

  try {
    // We send 'total_days' to match your migration and 'status' defaults to pending in Laravel
    await axios.post('http://127.0.0.1:8000/api/leaves', {
      ...form.value,
      total_days: totalDaysRequested.value
    }, {
      headers: { Authorization: `Bearer ${tokenCookie.value}` }
    });

    message.value = "✅ Leave request sent successfully!";
    
    // Reset form
    form.value = {
      leave_type: 'Sick Leave',
      reason: '',
      start_date: '',
      end_date: '',
    };
  } catch (err) {
    message.value = "❌ Error sending request. Please check your connection.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      
      <div class="bg-primary p-6 text-white text-center">
        <h2 class="text-xl font-black italic">Request Leave</h2>
        <p class="text-[10px] opacity-80 uppercase tracking-widest mt-1 font-bold">Submit your request to HR</p>
      </div>

      <div class="p-8 space-y-5">
        
        <transition name="fade">
          <div v-if="message" :class="message.includes('✅') ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-rose-600 bg-rose-50 border-rose-100'" class="p-4 rounded-xl text-sm font-bold text-center border">
            {{ message }}
          </div>
        </transition>

        <div>
          <label class="text-[10px] font-black text-slate-400 uppercase block mb-1">Type of Leave</label>
          <select v-model="form.leave_type" class="w-full border-slate-200 border p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50 font-bold text-slate-700">
            <option>Sick Leave</option>
            <option>Annual Leave</option>
            <option>Personal Leave</option>
            <option>Maternity Leave</option>
          </select>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] font-black text-slate-400 uppercase block mb-1">Start Date</label>
            <input v-model="form.start_date" type="date" class="w-full border-slate-200 border p-3 rounded-xl outline-none text-sm font-medium text-slate-600 focus:border-primary" />
          </div>
          <div>
            <label class="text-[10px] font-black text-slate-400 uppercase block mb-1">End Date</label>
            <input v-model="form.end_date" type="date" class="w-full border-slate-200 border p-3 rounded-xl outline-none text-sm font-medium text-slate-600 focus:border-primary" />
          </div>
        </div>

        <div v-if="totalDaysRequested > 0" class="bg-slate-50 p-3 rounded-xl flex justify-between items-center border border-dashed border-slate-200">
           <span class="text-[10px] font-black text-slate-400 uppercase">Duration:</span>
           <span class="text-sm font-black text-primary">{{ totalDaysRequested }} Days</span>
        </div>

        <div>
          <label class="text-[10px] font-black text-slate-400 uppercase block mb-1">Reason (The "Chat")</label>
          <textarea v-model="form.reason" placeholder="Explain your reason here..." rows="4" class="w-full border-slate-200 border p-4 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 text-sm text-slate-600 leading-relaxed"></textarea>
        </div>

        <button 
          @click="submitLeave" 
          :disabled="loading" 
          class="w-full bg-primary text-white font-black py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
        >
          <span v-if="!loading" class="tracking-widest">SEND REQUEST</span>
          <span v-else class="flex items-center justify-center gap-2">
            <Icon name="line-md:loading-twotone-loop" class="text-xl" />
            PROCESSING...
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>