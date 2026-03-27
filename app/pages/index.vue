<template>
  <div class="min-h-auto bg-slate-50 font-sans text-slate-900">
    <header class="bg-white border-b border-slate-200 p-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="flex items-center gap-6">
            <div class="relative group">
              <div class="bg-primary w-20 h-20 md:w-24 md:h-24 rounded-xl flex justify-center items-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                <Icon name="mdi:account-outline" class="text-4xl md:text-5xl text-white" />
              </div>
              <div class="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-xl border-4 border-white shadow-sm"></div>
            </div>
            
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ currentDateTime }}</span>
              <h1 class="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">{{ greeting }}!</h1>
              <div class="flex flex-wrap gap-x-4 mt-2 text-sm">
                <p class="flex items-center gap-1.5 text-slate-500">
                  <span>Position:</span> 
                  <span class="font-bold text-slate-700">Risk Management</span>
                </p>
                <span class="text-slate-300 hidden md:block">|</span>
                <p class="flex items-center gap-1.5 text-slate-500">
                  <span>Joined:</span> 
                  <span class="font-bold text-slate-700">2 Mar, 2025</span>
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="bg-emerald-50 text-emerald-700 px-4 py-2.5 rounded-xl border border-emerald-100 flex items-center gap-2 shadow-sm">
              <div class="w-2 h-2 rounded-xl bg-emerald-500 animate-pulse"></div>
              <span class="text-sm font-bold">142 Online</span>
            </div>
            <div class="bg-slate-100 text-slate-600 px-4 py-2.5 rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm">
              <Icon name="mdi:account-off-outline" class="text-lg text-slate-400" />
              <span class="text-sm font-bold">1,093 Offline</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="p-6 lg:p-10 max-w-7xl mx-auto  space-y-8">
      
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
            <Icon name="mdi:account-check" class="text-2xl text-primary group-hover:text-white" />
          </div>
          <p class="text-slate-500 font-bold text-sm uppercase tracking-wide">Present Employees</p>
          <h2 class="text-5xl font-black text-slate-900 my-2">142</h2>
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
            <span class="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase">Active Now</span>
            <span class="text-xs text-slate-400 font-bold">142 / 1,235</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all group">
          <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
            <Icon name="mdi:account-remove" class="text-2xl text-red-500 group-hover:text-white" />
          </div>
          <p class="text-slate-500 font-bold text-sm uppercase tracking-wide">Absent Employees</p>
          <h2 class="text-5xl font-black text-red-500 my-2">900</h2>
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
            <span class="text-[10px] font-black text-red-600 bg-red-50 px-2 py-1 rounded-md uppercase">Inactive</span>
            <span class="text-xs text-slate-400 font-bold">900 / 1,235</span>
          </div>
        </div>

        <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
          <div class="relative z-10">
            <div class="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
              <Icon name="mdi:clock-outline" class="text-2xl text-amber-600 group-hover:text-white" />
            </div>
            <p class="text-slate-500 font-bold text-sm uppercase tracking-wide">Pending Approvals</p>
            <h2 class="text-5xl font-black text-slate-900 my-2">193</h2>
          </div>
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-50 relative z-10">
            <span class="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-md uppercase">Notification</span>
            <span class="text-xs text-slate-400 font-bold">193 / 1,235 Total Requests</span>
          </div>
          <Icon name="mdi:chevron-right" class="absolute -right-8 -bottom-8 text-[12rem] text-slate-50 opacity-50" />
        </div>
      </section>

      <section class=" ">
        
        <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 class="font-black text-slate-800 uppercase tracking-tight">Employee Check-in Feed</h3>
            <button class="text-primary text-xs font-bold hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">VIEW ALL RECORDS</button>
          </div>
          
          <div class="overflow-x-auto">
            <table class=" w-full text-left">
              <thead>
                <tr class="text-slate-700 text-base uppercase font-black border-b border-slate-100">
                  <th class="px-8 py-4">Employee</th>
                  <th class="px-6 py-4">Department</th>
                  <th class="px-6 py-4">Time</th>
                  <th class="px-8 py-4 text-right">Status</th>
                </tr>
              </thead>
            <tbody class="divide-y divide-slate-50">
                    <tr 
                        v-for="staff in staffActivity" 
                        :key="staff.id" 
                        class="hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                        <td class="px-8 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-[15px] font-black text-slate-500">
                            {{ staff.initials }}
                            </div>
                            <div>
                            <p class="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                                {{ staff.name }}
                            </p>
                            <p class="text-[15px] text-slate-400 font-medium">ID: #00{{ staff.id }}</p>
                            </div>
                        </div>
                        </td>

                        <td class="px-6 py-4 text-base text-slate-500 font-medium">
                        {{ staff.dept }}
                        </td>

                        <td class="px-6 py-4 text-base text-slate-400">
                        {{ staff.time }}
                        </td>

                        <td class="px-8 py-4 text-right">
                        <span 
                            :class="staff.statusClass" 
                            class="px-3 py-2 rounded-xl text-[13px] font-black "
                        >
                            {{ staff.status }}
                        </span>
                        </td>
                    </tr>
            </tbody>
            </table>
          </div>
        </div>

        

      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentDateTime = ref('')
let timer

const updateTime = () => {
  currentDateTime.value = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
const staffActivity = ref([
  {
    id: 1,
    name: 'Sarah Jenkins',
    initials: 'SJ',
    dept: 'Risk Management',
    time: '08:12 AM',
    status: 'On-site',
    statusClass: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    initials: 'MC',
    dept: 'IT Infrastructure',
    time: '08:45 AM',
    status: 'Remote',
    statusClass: 'bg-blue-100 text-blue-700'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    initials: 'ER',
    dept: 'Risk Management',
    time: '09:05 AM',
    status: 'On-site',
    statusClass: 'bg-emerald-100 text-emerald-700'
  }
])
const greeting = ref('')

const setGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 5) greeting.value = 'Good Night'
  else if (hour < 12) greeting.value = 'Good Morning'
  else if (hour < 17) greeting.value = 'Good Afternoon'
  else if (hour < 21) greeting.value = 'Good Evening'
  else greeting.value = 'Good Night'
}

onMounted(() => {
  updateTime()
  setGreeting()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
