<template>
  <div class="min-h-screen bg-[#f1f5f9] p-4 md:p-10 font-sans text-slate-900">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 class="text-3xl font-black tracking-tighter text-slate-800">Leave Management</h1>
          <p class="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1 opacity-70">Database: lucky_db</p>
        </div>
        <div class="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 text-center">
          <p class="text-[10px] font-black text-blue-400 uppercase">Active Requests</p>
          <p class="text-xl font-black text-blue-600">{{ leaves.length }}</p>
        </div>
      </div>

      <div class="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-100">
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">ID</th>
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">Employee</th>
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Type</th>
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Days</th>
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th class="p-6 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-50">
              <tr v-for="l in leaves" :key="l.id" class="group hover:bg-slate-50/50 transition-all">
                <td class="p-6 text-center text-xs font-bold text-slate-300">#{{ l.id }}</td>
                
                <td class="p-6">
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-black">
                      {{ l.user?.name ? l.user.name.charAt(0) : '?' }}
                    </div>
                    <div>
                      <p class="font-bold text-slate-800 text-sm">{{ l.user?.name || 'Staff' }}</p>
                      <p class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{{ l.user?.position || 'Employee' }}</p>
                    </div>
                  </div>
                </td>

                <td class="p-6 text-center">
                  <span class="px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-black uppercase border border-blue-100">
                    {{ l.leave_type }}
                  </span>
                </td>

                <td class="p-6 text-center font-black text-slate-700">{{ l.total_days }}</td>

                <td class="p-6 text-center">
                  <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase border"
                    :class="l.status === 'approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-orange-600 border-orange-100'">
                    {{ l.status }}
                  </span>
                </td>

                <td class="p-6 text-right">
                  <div class="flex gap-2 justify-end">
                    <button 
                      v-if="l.status === 'pending'"
                      @click="approveLeave(l.id)"
                      class="bg-emerald-500 text-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-600 shadow-md transition-all active:scale-95"
                    >
                      Approve
                    </button>
                    
                    <button 
                      @click="deleteLeave(l.id)"
                      class="bg-white text-rose-500 border border-rose-100 px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all active:scale-95"
                    >
                      Reject & Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div v-if="leaves.length === 0" class="p-20 text-center text-slate-400 font-bold uppercase text-xs">
            No data in lucky_db
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCookie } from '#imports';

const token = useCookie('auth_token');
const leaves = ref([]);

// API Base URL - Make sure this matches your Laravel server!
const API_URL = 'http://127.0.0.1:8000/api';

const fetchLeaves = async () => {
  try {
    const res = await $fetch(`${API_URL}/leaves`, {
      headers: { Authorization: `Bearer ${token.value}` }
    });
    leaves.value = res;
  } catch (err) {
    console.error("Fetch Error:", err);
  }
};

const approveLeave = async (id) => {
  try {
    await $fetch(`${API_URL}/leaves/${id}`, {
      method: 'PUT',
      headers: { 
        Authorization: `Bearer ${token.value}`,
        'Accept': 'application/json'
      },
      body: { status: 'approved' }
    });
    await fetchLeaves();
  } catch (err) {
    console.error("Approve Error:", err);
  }
};

const deleteLeave = async (id) => {
  if (!confirm("Are you sure? This will permanently DELETE this leave from the database.")) return;

  try {
    // We target the ID directly in the URL
    await $fetch(`${API_URL}/leaves/${id}`, {
      method: 'DELETE',
      headers: { 
        Authorization: `Bearer ${token.value}`,
        'Accept': 'application/json' // Tell Laravel we want a JSON response
      }
    });

    // Refresh the list immediately
    await fetchLeaves();
    
  } catch (err) {
    console.error("Delete failed. Checking reason...");
    console.log("Error status:", err.status);
    alert("Delete failed! Check the Browser Console (F12) for details.");
  }
};

onMounted(fetchLeaves);
</script>