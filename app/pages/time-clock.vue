<script setup>
import { ref, onMounted } from 'vue';
import { useCookie } from '#imports';

const tokenCookie = useCookie('auth_token'); // Sanctum token
const activeSession = ref(null);
const processing = ref(false);
const data = ref({ history: [] });

// Format time
const formatTime = (time) => time ? new Date(time).toLocaleTimeString() : '--:--:--';

// Auth headers
const getAuthHeaders = () => ({
  Accept: 'application/json',
  Authorization: `Bearer ${tokenCookie.value}`
});

// Punch in/out
const handleAction = async (type) => {
  if (!tokenCookie.value) return alert('User not logged in');

  processing.value = true;
  try {
    const res = await $fetch('http://127.0.0.1:8000/api/attendance', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: { type }
    });

    if (type === 'in') activeSession.value = res.data;
    else activeSession.value = null;

    await loadData();
  } catch (err) {
    console.error(err);
    alert(err?.data?.message || 'Error sending attendance');
  } finally {
    processing.value = false;
  }
};

// Load attendance history
const loadData = async () => {
  if (!tokenCookie.value) return;

  try {
    const res = await $fetch('http://127.0.0.1:8000/api/attendance', {
      headers: getAuthHeaders()
    });

    activeSession.value = res.find(a => !a.check_out) || null;
    data.value = { history: res.reverse() };
  } catch (err) {
    console.error(err);
  }
};

onMounted(loadData);
</script>
<template>
  <div class="min-h-screen bg-[#f8fafc] p-8 font-sans text-slate-900">
    <div class="max-w-5xl mx-auto">
      
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-slate-200 pb-6">
        <div>
          <h1 class="text-3xl font-light tracking-tight text-slate-800 uppercase italic">Time <span class="font-bold not-italic">Clock</span></h1>
          <p class="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold text-[10px]">Hansei Enterprise System</p>
        </div>
        <div class="mt-4 md:mt-0 text-right">
          <div class="text-2xl font-mono font-medium text-indigo-600">Terminal Active</div>
          <div class="text-xs uppercase tracking-widest text-slate-400 font-bold">Live Data Sync</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-4 space-y-6">
          <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 class="text-xs uppercase tracking-widest font-bold text-slate-400 mb-6">Shift Authorization</h2>
            
            <div class="space-y-4">
              <button 
                @click="handleAction('in')"
                :disabled="activeSession || processing"
                class="w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all group"
                :class="!activeSession ? 'bg-white border-indigo-100 hover:border-indigo-600 hover:shadow-lg' : 'bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed'"
              >
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <i class="fa-solid fa-play text-xs"></i>
                  </div>
                  <span class="font-bold text-slate-700">PUNCH IN</span>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-300 group-hover:text-indigo-600"></i>
              </button>

              <button 
                @click="handleAction('out')"
                :disabled="!activeSession || processing"
                class="w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all group"
                :class="activeSession ? 'bg-white border-rose-100 hover:border-rose-600 hover:shadow-lg' : 'bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed'"
              >
                <div class="flex items-center space-x-4">
                  <div class="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <i class="fa-solid fa-stop text-xs"></i>
                  </div>
                  <span class="font-bold text-slate-700">PUNCH OUT</span>
                </div>
                <i class="fa-solid fa-chevron-right text-slate-300 group-hover:text-rose-600"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden border-b-8 border-indigo-600">
            <div class="relative z-10">
              <div class="flex justify-between items-start mb-12">
                <div>
                  <p class="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Session Monitoring</p>
                  <h3 class="text-2xl font-bold tracking-tight">
                    {{ activeSession ? 'SHIFT IN PROGRESS' : 'STANDBY MODE' }}
                  </h3>
                </div>
                <div v-if="activeSession" class="flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-bold border border-emerald-500/30 tracking-widest animate-pulse">
                  LIVE
                </div>
              </div>

              <div class="grid grid-cols-2 gap-8 mb-4">
                <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p class="text-slate-500 text-[10px] font-bold uppercase mb-2 tracking-widest">Clocked In At</p>
                  <p class="text-3xl font-mono text-indigo-400 font-bold">
                    {{ activeSession ? formatTime(activeSession.check_in) : '--:--:--' }}
                  </p>
                </div>
                <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p class="text-slate-500 text-[10px] font-bold uppercase mb-2 tracking-widest">Status / Reason</p>
                  <p class="text-xl font-bold text-slate-200">
                    {{ activeSession ? (activeSession.reason || 'Standard Shift') : 'Station Locked' }}
                  </p>
                </div>
              </div>
            </div>
            
            <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px;"></div>
          </div>

          <div class="mt-8 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div class="bg-slate-50 px-6 py-3 border-b border-slate-200">
               <span class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Recent Attendance Logs</span>
            </div>
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-100 text-slate-500 font-bold text-[10px] uppercase tracking-widest border-b border-slate-200">
                <tr>
                  <th class="px-6 py-4">Date</th>
                  <th class="px-6 py-4 text-center">In / Out</th>
                  <th class="px-6 py-4 text-right">Hours Logged</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr v-for="log in data?.history" :key="log.id" class="hover:bg-slate-50 transition-colors">
                  <td class="px-6 py-4">
                    <div class="font-bold text-slate-700">{{ new Date(log.created_at).toLocaleDateString() }}</div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-[10px] bg-slate-200 px-2 py-1 rounded font-bold">{{ formatTime(log.check_in) }}</span>
                    <span class="mx-2 text-slate-300">→</span>
                    <span class="text-[10px] bg-slate-200 px-2 py-1 rounded font-bold">{{ formatTime(log.check_out) }}</span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <span class="text-indigo-600 font-mono font-bold">{{ log.work_hour }} HR</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>