<script setup>
import { ref, onMounted } from 'vue';
import { useCookie } from '#imports';

const tokenCookie = useCookie('auth_token');
const selectedEmployee = ref(null);
const employees = ref([]); 
const loading = ref(false);
const error = ref(null);

// Pricing Constants
const RATE_PER_MINUTE = 1;
const ALLOWANCE = 50;

const loadPayrollData = async () => {
  if (!tokenCookie.value) return;
  loading.value = true;
  error.value = null;
  
  try {
    // Fetching both users and attendance to calculate minutes manually
    const [users, logs] = await Promise.all([
      $fetch('http://127.0.0.1:8000/api/user', { headers: { Authorization: `Bearer ${tokenCookie.value}` } }),
      $fetch('http://127.0.0.1:8000/api/attendance', { headers: { Authorization: `Bearer ${tokenCookie.value}` } })
    ]);

    employees.value = users.map(user => {
      const userLogs = logs.filter(l => l.user_id === user.id);
      let totalMins = 0;
      let lates = 0;

      const dailyLogs = userLogs.map(log => {
        const checkIn = log.check_in ? new Date(log.check_in) : null;
        const checkOut = log.check_out ? new Date(log.check_out) : null;
        let mins = 0;
        if (checkIn && checkOut) mins = Math.floor((checkOut - checkIn) / 1000 / 60);
        
        totalMins += mins;
        if (mins > 0 && mins < 480) lates++; // Logic for 'Late' if under 8 hours

        return {
          date: checkIn ? checkIn.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '--',
          in: checkIn ? checkIn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--',
          out: checkOut ? checkOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--',
          mins,
          status: mins >= 480 ? 'On Time' : 'Late'
        };
      });

      return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        role: user.position?.name || user.position || 'Staff',
        department: user.department?.name || 'General',
        email: user.email || 'N/A',
        avatar: user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`,
        stats: {
          month: 'March 2026',
          totalMinutes: totalMins,
          totalHours: (totalMins / 60).toFixed(1),
          baseSalary: totalMins * RATE_PER_MINUTE, // $1 per minute
          allowances: ALLOWANCE,
          deductions: lates * 5, // $5 per late
          lates: lates
        },
        dailyLogs
      };
    });
  } catch (err) {
    error.value = "Failed to load records. Please check API connection.";
  } finally {
    loading.value = false;
  }
};

const getNetPay = (emp) => {
  if (!emp || !emp.stats) return 0;
  const s = emp.stats;
  return (s.baseSalary + s.allowances) - s.deductions;
};

onMounted(loadPayrollData);
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 p-8 font-sans">
    <div class="max-w-6xl mx-auto">
      
      <header class="mb-10 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight italic">Payroll Dashboard</h1>
          <p class="text-slate-500 font-medium tracking-wide uppercase text-xs">Minute-Based Settlement ($1/min)</p>
        </div>
        <div class="bg-white border px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-primary">
          {{ new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) }}
        </div>
      </header>

      <div v-if="loading" class="text-center py-20 text-slate-400 animate-pulse font-bold uppercase tracking-widest">
        Calculating Attendance Records...
      </div>
      <div v-else-if="error" class="bg-red-50 border border-red-100 p-6 rounded-2xl text-red-600 text-center">
        {{ error }}
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="emp in employees" :key="emp.id" 
             @click="selectedEmployee = emp"
             class="group bg-white border border-slate-200 p-6 rounded-2xl hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-md">
          
          <div class="flex items-center gap-4 mb-6">
            <img :src="emp.avatar" class="w-14 h-14 rounded-full bg-slate-100 border-2 border-slate-50 shadow-inner" />
            <div>
              <h3 class="font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight">{{ emp.name }}</h3>
              <p class="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{{ emp.role }}</p>
            </div>
          </div>

          <div class="flex justify-between items-end pt-4 border-t border-slate-50">
            <div>
              <p class="text-[10px] text-slate-400 uppercase font-black mb-1">Total Net Pay</p>
              <p class="text-2xl font-black text-slate-900 tracking-tighter">${{ getNetPay(emp).toLocaleString() }}</p>
            </div>
            <button class="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="selectedEmployee" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div class="bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            
            <div class="bg-primary p-8 text-white flex justify-between items-center">
              <div class="flex items-center gap-6">
                <img :src="selectedEmployee.avatar" class="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 p-1 shadow-inner" />
                <div>
                  <h2 class="text-2xl font-black tracking-tight">{{ selectedEmployee.name }}</h2>
                  <p class="text-primary-foreground/70 font-bold text-xs uppercase tracking-widest">{{ selectedEmployee.role }} • {{ selectedEmployee.department }}</p>
                </div>
              </div>
              <button @click="selectedEmployee = null" class="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-3xl font-light">&times;</button>
            </div>

            <div class="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-l-4 border-primary pl-3">Efficiency Audit</h4>
                <div class="space-y-4">
                  <div class="flex justify-between py-3 border-b border-slate-50 text-sm">
                    <span class="text-slate-500 font-medium">Logged Time</span>
                    <span class="text-slate-900 font-bold">{{ selectedEmployee.stats.totalHours }} Hours</span>
                  </div>
                  <div class="flex justify-between py-3 border-b border-slate-50 text-sm">
                    <span class="text-slate-500 font-medium">Minute Count</span>
                    <span class="text-primary font-black">{{ selectedEmployee.stats.totalMinutes }}m</span>
                  </div>
                  <div class="flex justify-between py-3 border-b border-slate-50 text-sm">
                    <span class="text-slate-500 font-medium">Penalty Instances</span>
                    <span class="text-rose-500 font-bold">{{ selectedEmployee.stats.lates }} Lates</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 border-l-4 border-emerald-500 pl-3">Settlement Math</h4>
                <div class="bg-slate-50 p-6 rounded-3xl space-y-4 border border-slate-100">
                  <div class="flex justify-between text-sm">
                    <span class="text-slate-600">Base Earnings ($1/min)</span>
                    <span class="font-black text-slate-900">${{ selectedEmployee.stats.baseSalary.toLocaleString() }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-slate-600">Fixed Allowances</span>
                    <span class="font-black text-emerald-600">+$100</span>
                  </div>
                  <div class="flex justify-between text-sm pt-4 border-t border-slate-200 text-rose-500">
                    <span class="font-bold uppercase text-[10px]">Deductions</span>
                    <span class="font-black">-${{ selectedEmployee.stats.deductions }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-10 py-8 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                <p class="text-slate-500 text-[10px] uppercase font-black tracking-widest">Final Net Settlement</p>
                <p class="text-slate-400 text-[10px] italic">Verified Calculation for March 2026</p>
              </div>
              <div class="text-right">
                <span class="text-5xl font-black text-primary tracking-tighter">${{ getNetPay(selectedEmployee).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>