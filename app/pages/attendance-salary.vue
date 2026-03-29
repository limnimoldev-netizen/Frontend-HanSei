<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useCookie } from '#imports';

const tokenCookie = useCookie('auth_token');
const selectedEmployee = ref(null);
const employees = ref([]); // Starts empty, filled by API
const loading = ref(false);
const error = ref(null);

// Fetch data from your Laravel Backend
const loadPayrollData = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/attendance-reports', {
      headers: { 
        'Authorization': `Bearer ${tokenCookie.value}`,
        'Accept': 'application/json'
      }
    });

    // Map the Laravel data to your UI structure
    const rawData = response.data.data || response.data;
    
    if (Array.isArray(rawData)) {
      employees.value = rawData.map(r => ({
        id: r.id,
        name: r.user ? `${r.user.first_name} ${r.user.last_name}` : 'Unknown User',
        role: r.user?.position?.name || 'Staff',
        department: r.user?.department?.name || 'General',
        joinedDate: r.user?.created_at ? new Date(r.user.created_at).toLocaleDateString() : 'N/A',
        email: r.user?.email || 'N/A',
        avatar: r.user?.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${r.id}`,
        stats: {
          month: 'March 2026',
          baseSalary: parseFloat(r.user?.salary || 0), 
          overtimePay: parseFloat(r.overtimes || 0) * 15, // Change 15 to your hourly rate
          allowances: 100,
          deductions: (parseInt(r.total_absent || 0) * 20) + (parseInt(r.total_lates || 0) * 5),
          totalHours: r.total_month_hour || 0
        }
      }));
    }
  } catch (err) {
    console.error("API Error:", err);
    error.value = "Failed to load payroll data. Please check your connection.";
  } finally {
    loading.value = false;
  }
};

const getNetPay = (emp) => {
  if (!emp || !emp.stats) return 0;
  const s = emp.stats;
  return (s.baseSalary + s.overtimePay + s.allowances) - s.deductions;
};

// Run the fetch when the component is ready
onMounted(loadPayrollData);
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 p-8 font-sans">
    <div class="max-w-6xl mx-auto">
      
      <header class="mb-10 flex justify-between items-end">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Payroll Dashboard</h1>
          <p class="text-slate-500 font-medium">Detailed Employee Remuneration Reports</p>
        </div>
        <div class="bg-white border px-4 py-2 rounded-xl shadow-sm text-sm font-bold text-primary">
          {{ new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) }}
        </div>
      </header>

      <div v-if="loading" class="text-center py-20 text-slate-400 animate-pulse font-bold uppercase tracking-widest">
        Loading Payroll Records...
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
              <h3 class="font-bold text-slate-900 group-hover:text-primary transition-colors">{{ emp.name }}</h3>
              <p class="text-slate-500 text-xs font-semibold uppercase tracking-wider">{{ emp.role }}</p>
            </div>
          </div>

          <div class="flex justify-between items-end pt-4 border-t border-slate-50">
            <div>
              <p class="text-[10px] text-slate-400 uppercase font-bold mb-1">Monthly Net</p>
              <p class="text-xl font-black text-slate-900">${{ getNetPay(emp).toLocaleString() }}</p>
            </div>
            <button class="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="selectedEmployee" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div class="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            
            <div class="bg-primary p-8 text-white flex justify-between items-center">
              <div class="flex items-center gap-6">
                <img :src="selectedEmployee.avatar" class="w-20 h-20 rounded-2xl bg-white/20 border border-white/30 p-1" />
                <div>
                  <h2 class="text-2xl font-black">{{ selectedEmployee.name }}</h2>
                  <p class="text-primary-foreground/80 font-medium">{{ selectedEmployee.role }} • {{ selectedEmployee.department }}</p>
                </div>
              </div>
              <button @click="selectedEmployee = null" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-2xl font-light">&times;</button>
            </div>

            <div class="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Employment Overview</h4>
                <div class="space-y-4">
                  <div class="flex justify-between py-3 border-b border-slate-100 text-sm">
                    <span class="text-slate-500 font-medium">Email Address</span>
                    <span class="text-slate-900 font-semibold">{{ selectedEmployee.email }}</span>
                  </div>
                  <div class="flex justify-between py-3 border-b border-slate-100 text-sm">
                    <span class="text-slate-500 font-medium">Join Date</span>
                    <span class="text-slate-900 font-semibold">{{ selectedEmployee.joinedDate }}</span>
                  </div>
                  <div class="flex justify-between py-3 border-b border-slate-100 text-sm">
                    <span class="text-slate-500 font-medium">Total Hours Worked</span>
                    <span class="text-slate-900 font-semibold">{{ selectedEmployee.stats.totalHours }}h</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Salary Breakdown</h4>
                <div class="bg-slate-50 p-6 rounded-2xl space-y-4">
                  <div class="flex justify-between text-sm">
                    <span class="text-slate-600">Base Salary</span>
                    <span class="font-bold text-slate-900">${{ selectedEmployee.stats.baseSalary }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-slate-600">Overtime Pay</span>
                    <span class="font-bold text-emerald-600">+${{ selectedEmployee.stats.overtimePay }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-slate-600">Travel/Net Allowance</span>
                    <span class="font-bold text-emerald-600">+${{ selectedEmployee.stats.allowances }}</span>
                  </div>
                  <div class="flex justify-between text-sm pt-4 border-t border-slate-200 text-rose-500">
                    <span class="font-medium">Total Deductions</span>
                    <span class="font-bold">-${{ selectedEmployee.stats.deductions }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-10 py-8 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                <p class="text-slate-500 text-xs uppercase font-bold">Net Settlement Amount</p>
                <p class="text-slate-400 text-[10px] italic">Month of {{ selectedEmployee.stats.month }}</p>
              </div>
              <div class="text-right">
                <span class="text-4xl font-black text-primary">${{ getNetPay(selectedEmployee).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>