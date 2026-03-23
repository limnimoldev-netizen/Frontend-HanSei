<script setup>

const selectedEmployee = ref(null);


const employees = ref([
  {
    id: 1,
    name: 'Chan Samang',
    role: 'Senior Web Developer',
    department: 'Engineering',
    joinedDate: 'Jan 2024',
    email: 'samang.dev@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samang',
    stats: {
      month: 'March 2026',
      baseSalary: 2800,
      overtimePay: 240,
      allowances: 120,
      deductions: 450,
      totalHours: 172
    }
  },
  {
    id: 2,
    name: 'Sokha Devi',
    role: 'Lead Designer',
    department: 'Creative',
    joinedDate: 'Mar 2023',
    email: 'devi.design@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Devi',
    stats: {
      month: 'March 2026',
      baseSalary: 2500,
      overtimePay: 0,
      allowances: 100,
      deductions: 380,
      totalHours: 160
    }
  },
  
   {
    id: 2,
    name: 'Sokha Devi',
    role: 'Lead Designer',
    department: 'Creative',
    joinedDate: 'Mar 2023',
    email: 'devi.design@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Devi',
    stats: {
      month: 'March 2026',
      baseSalary: 2500,
      overtimePay: 0,
      allowances: 100,
      deductions: 380,
      totalHours: 160
    }
  },
   {
    id: 2,
    name: 'Sokha Devi',
    role: 'Lead Designer',
    department: 'Creative',
    joinedDate: 'Mar 2023',
    email: 'devi.design@company.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Devi',
    stats: {
      month: 'March 2026',
      baseSalary: 2500,
      overtimePay: 0,
      allowances: 100,
      deductions: 380,
      totalHours: 160
    }
  },
]);

const getNetPay = (emp) => {
  const s = emp.stats;
  return (s.baseSalary + s.overtimePay + s.allowances) - s.deductions;
};
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div class="bg-white w-full max-w-4xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            
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
