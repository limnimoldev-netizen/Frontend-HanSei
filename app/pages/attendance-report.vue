this code work <script setup>
import { ref, onMounted } from 'vue';
import { useCookie } from '#imports';

// Cookies for authentication
const tokenCookie = useCookie('auth_token');
const userDataCookie = useCookie('user_data');

const selectedStaff = ref(null);
const employees = ref([]);
const loading = ref(false);

// Format a timestamp to HH:MM:SS or '--:--:--'
const formatTime = (time) => {
  if (!time) return '--:--:--';
  return new Date(time).toLocaleTimeString('en-US', { hour12: false });
};

// Styling for status
const getStatusStyle = (status) => {
  if (status === 'On Time') return 'text-emerald-600 bg-emerald-50 border-emerald-100';
  if (status === 'Late') return 'text-amber-600 bg-amber-50 border-amber-100';
  return 'text-slate-500 bg-slate-50 border-slate-100';
};

// Auth headers for API
const getAuthHeaders = () => ({
  Accept: 'application/json',
  Authorization: `Bearer ${tokenCookie.value}`
});

// Load employees + attendance data
const loadEmployees = async () => {
  if (!tokenCookie.value) return;

  loading.value = true;

  try {
    // 1️⃣ Fetch all users
    const users = await $fetch('http://127.0.0.1:8000/api/user', {
      headers: getAuthHeaders()
    });

    // 2️⃣ Fetch all attendance records once
    const attendances = await $fetch('http://127.0.0.1:8000/api/attendance', {
      headers: getAuthHeaders()
    });

    // 3️⃣ Map users into employee objects with logs & summary
    employees.value = users.map(user => {
      const userLogsRaw = attendances.filter(a => a.user_id === user.id);

      const dailyLogs = userLogsRaw.map(a => {
        const checkIn = a.check_in ? new Date(a.check_in) : null;
        const checkOut = a.check_out ? new Date(a.check_out) : null;

        let hours = 0;
        if (checkIn && checkOut) hours = (checkOut - checkIn) / 1000 / 3600;

        return {
          date: checkIn ? checkIn.toDateString() : '--',
          in: formatTime(a.check_in),
          out: formatTime(a.check_out),
          duration: hours ? hours.toFixed(2) + 'h' : '--',
          status: hours >= 8 ? 'On Time' : 'Late'
        };
      });

      const totalHours = dailyLogs.reduce((sum, log) => {
        const h = parseFloat(log.duration);
        return sum + (isNaN(h) ? 0 : h);
      }, 0);

      // Weekly average calculation: assume 4 weeks/month
      const weeklyAvg = (totalHours / 4).toFixed(2);

      return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        role: user.position || 'Employee',
        avatar: user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.first_name}`,
        month: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        summary: {
          totalDays: 22,
          daysWorked: dailyLogs.length,
          weeklyAvg,
          monthlyHours: totalHours.toFixed(2),
          targetHours: 160,
        },
        dailyLogs
      };
    });

  } catch (err) {
    console.error('Error loading employees:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(loadEmployees);
</script>
<template>
  <div class="min-h-screen bg-white p-8 font-sans text-slate-900">
    <div class="max-w-6xl mx-auto">
      
      <div class="mb-10 border-b border-slate-100 pb-6 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-black text-slate-900">Time & Attendance Audit</h1>
          <p class="text-slate-500 font-medium mt-1 uppercase text-xs tracking-widest">Performance Tracking System</p>
        </div>
        <div class="text-right">
          <p class="text-xs font-bold text-slate-400 uppercase">Current Audit Month</p>
          <p class="text-lg font-black text-primary">March 2026</p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <div v-for="emp in employees" :key="emp.id" 
             @click="selectedStaff = emp"
             class="group bg-white border border-slate-200 rounded-xl p-6 hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div class="flex items-center gap-5 min-w-[250px]">
            <img :src="emp.avatar" class="w-16 h-16 rounded-2xl bg-slate-50 border shadow-inner" />
            <div>
              <h3 class="font-black text-xl group-hover:text-primary transition-colors">{{ emp.name }}</h3>
              <p class="text-xs font-bold text-slate-400 uppercase">{{ emp.role }}</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 border-l border-slate-100 pl-8">
            <div>
              <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Weekly Avg</p>
              <p class="text-lg font-black text-slate-800">{{ emp.summary.weeklyAvg }}h <span class="text-[10px] text-emerald-500">/ week</span></p>
            </div>
            <div>
              <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Days Worked</p>
              <p class="text-lg font-black text-slate-800">{{ emp.summary.daysWorked }} <span class="text-[10px] text-slate-400">/ {{ emp.summary.totalDays }}</span></p>
            </div>
            <div>
              <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Month Total</p>
              <p class="text-lg font-black text-primary">{{ emp.summary.monthlyHours }}h</p>
            </div>
            <div class="flex items-center">
              <span class="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-black rounded-full border border-primary/20">VIEW LOGS</span>
            </div>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="selectedStaff" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div class="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div class="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                  {{ selectedStaff.name.charAt(0) }}
                </div>
                <div>
                  <h2 class="text-2xl font-black text-slate-900">{{ selectedStaff.name }}</h2>
                  <p class="text-sm text-slate-400 font-bold uppercase tracking-tighter">{{ selectedStaff.month }} Logs</p>
                </div>
              </div>
              <button @click="selectedStaff = null" class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all font-light text-2xl">&times;</button>
            </div>

            <div class="overflow-y-auto p-8 pt-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <p class="text-[10px] font-black text-slate-400 uppercase mb-2">Monthly Target Progress</p>
                  <div class="w-full bg-slate-200 h-2 rounded-full mb-3 overflow-hidden">
                    <div class="bg-primary h-full" :style="{ width: (selectedStaff.summary.monthlyHours / selectedStaff.summary.targetHours * 100) + '%' }"></div>
                  </div>
                  <p class="text-xl font-black">{{ selectedStaff.summary.monthlyHours }} <span class="text-sm font-normal text-slate-500">of {{ selectedStaff.summary.targetHours }} hrs reached</span></p>
                </div>
                
                
                <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 col-span-2 flex justify-around items-center">
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Regular Hours</p>
                    <p class="text-2xl font-black text-slate-800">160h</p>
                  </div>
                  <div class="w-px h-10 bg-slate-200"></div>
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Overtime</p>
                    <p class="text-2xl font-black text-emerald-500">+8h</p>
                  </div>
                  <div class="w-px h-10 bg-slate-200"></div>
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Paid Leave</p>
                    <p class="text-2xl font-black text-indigo-500">0d</p>
                  </div>
                </div>

                <div class="bg-slate-50 p-6 rounded-xl border border-slate-100 col-span-2 flex justify-around items-center">
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Total Present</p>
                    <p class="text-2xl font-black text-slate-800">842</p>
                  </div>
                  <div class="w-px h-10 bg-slate-200"></div>
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Total Absent</p>
                    <p class="text-2xl font-black text-red-500">8</p>
                  </div>
                  <div class="w-px h-10 bg-slate-200"></div>
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Total Late</p>
                    <p class="text-2xl font-black text-indigo-500">9</p>
                  </div>
                  <div class="w-px h-10 bg-slate-200"></div>
                  <div class="text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Total Leave</p>
                    <p class="text-2xl font-black text-red-500">9</p>
                  </div>
                </div>
              </div>

              <h3 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-l-4 border-primary pl-4">Daily Check-In/Out Records</h3>
              <div class="bg-white border border-slate-100 rounded-xl overflow-hidden">
                <table class="w-full text-left">
                  <thead class="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    <tr>
                      <th class="px-8 py-5">Work Day</th>
                      <th class="px-8 py-5">Check In</th>
                      <th class="px-8 py-5">Check Out</th>
                      <th class="px-8 py-5">Total Hours</th>
                      <th class="px-8 py-5">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50">
                    <tr v-for="log in selectedStaff.dailyLogs" :key="log.date" class="hover:bg-slate-50/50 transition-colors">
                      <td class="px-8 py-5 font-bold text-slate-700">{{ log.date }}</td>
                      <td class="px-8 py-5 font-mono text-slate-500">{{ log.in }}</td>
                      <td class="px-8 py-5 font-mono text-slate-500">{{ log.out }}</td>
                      <td class="px-8 py-5">
                        <span class="font-black text-slate-900">{{ log.duration }}</span>
                      </td>
                      <td class="px-8 py-5">
                        <span :class="getStatusStyle(log.status)" class="px-3 py-1 rounded-lg text-[10px] font-black uppercase border">
                          {{ log.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="p-8 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-sm font-bold">
              <span class="text-slate-400 italic">Report generated automatically by HR Portal v2.0</span>
              <button class="bg-primary text-white px-10 py-3 rounded-2xl shadow-lg shadow-primary/30">Download PDF Logs</button>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>