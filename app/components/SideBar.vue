<template>
  <div class="h-screen w-full bg-white overflow-hidden font-sans">
    <div v-if="route.path === '/login'" class="w-full h-full">
      <NuxtPage />
    </div>

    <nav v-else class="w-full bg-primary h-screen flex">
      <div class="w-[300px] h-screen bg-white border-r shadow-sm flex flex-col">
        <div class="w-full py-6 flex justify-center border-b border-slate-50">
          <div class="w-[80px] h-[90px]">
            <img src="/../app/assets/logo-company.png" alt="Logo" class="w-full h-full object-contain">
          </div>
        </div>
        
        <div class="flex-1 overflow-y-auto pt-8">
          <div class="flex flex-col mb-8">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400 ml-[25px] mb-4">Main Menu</span>
            <nav class="text-base">
              <ul class="space-y-1">
                <li><NuxtLink to="/1" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary group" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:account-group" class="text-2xl" /><span>Tasks</span></NuxtLink></li>
                <li><NuxtLink to="/2" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-check" class="text-2xl" /><span>Inbox</span></NuxtLink></li>
                <li><NuxtLink to="/3" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-clock" class="text-2xl" /><span>Calendar</span></NuxtLink></li>
                <li><NuxtLink to="/4" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-remove" class="text-2xl" /><span>Projects</span></NuxtLink></li>
                <li><NuxtLink to="/EmployeeSetting" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:settings" class="text-2xl" /><span>Setting</span></NuxtLink></li>
              </ul>
            </nav>
          </div>

          <div class="flex flex-col mb-8">
            <span class="text-xs font-bold uppercase tracking-wider text-gray-400 ml-[25px] mb-4">Hr Management</span>
            <nav class="text-base">
              <ul class="space-y-1">
                <li><NuxtLink to="/employee" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:account-group" class="text-2xl" /><span>Employees</span></NuxtLink></li>
                <li>
                  <NuxtLink to="/attendance" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-check" class="text-2xl" /><span>Attendance</span></NuxtLink>
                  <ul v-if="['/attendance', '/attendance-report', '/attendance-salary'].includes(route.path)" class="ml-[60px] text-gray-500 text-sm space-y-3 py-2">
                    <li><NuxtLink to="/attendance-report" class="hover:text-primary transition" active-class="text-primary font-bold">Attendance Report</NuxtLink></li>
                    <li><NuxtLink to="/attendance-salary" class="hover:text-primary transition" active-class="text-primary font-bold">Salary Report</NuxtLink></li>
                  </ul>
                </li>
                <li><NuxtLink to="/roster" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-clock" class="text-2xl" /><span>Roster Management</span></NuxtLink></li>
                <li><NuxtLink to="/leave" class="flex items-center gap-3 px-6 py-3 transition hover:bg-slate-50 hover:text-primary" active-class="text-primary bg-slate-50 font-bold border-r-4 border-primary"><Icon name="mdi:calendar-remove" class="text-2xl" /><span>Leave Management</span></NuxtLink></li>
              </ul>
            </nav>
          </div>

          <div class="mt-[150px] p-4 border-t border-slate-50">
            <button @click="handleLogout" class="flex items-center gap-3 px-6 py-3 w-full text-red-500 hover:bg-red-50 transition rounded-xl font-bold">
              <Icon name="mdi:logout" class="text-2xl" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div class="flex-1 h-screen flex flex-col bg-slate-50">
        <div class="bg-primary w-full h-[80px] flex flex-row justify-between items-center px-8 shadow-md z-10">
          <div class="w-[450px] h-[45px] bg-white/95 rounded-xl flex items-center shadow-inner">
            <Icon name="mdi:magnify" class="text-2xl ml-4 text-gray-400" />
            <input type="text" placeholder="Search or type a command" class="ml-3 outline-none w-full bg-transparent text-sm text-slate-700">
          </div>
          
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-5 border-r border-white/20 pr-6">
              <Icon name="mdi:lightning-bolt-outline" class="text-2xl text-white cursor-pointer hover:scale-110 transition" />
              <Icon name="mdi:account-plus-outline" class="text-2xl text-white cursor-pointer hover:scale-110 transition" />
              <Icon name="mdi:bell-outline" class="text-2xl text-white cursor-pointer hover:scale-110 transition" />
            </div>
            
            <div class="flex items-center gap-4">
              <div class="text-right flex flex-col">
                <span class="text-white text-sm font-bold leading-none">{{ user?.last_name || 'Loading...' }}</span>
                <span class="text-white/70 text-[10px] uppercase font-medium mt-1 tracking-tight">@{{ user?.username || 'Guest' }}</span>
              </div>
              <NuxtLink to="/profile-page" class="w-[48px] h-[48px] rounded-2xl bg-white flex justify-center items-center shadow-lg hover:rotate-3 transition duration-300">
                <Icon name="mdi:account-outline" class="text-2xl text-slate-800" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex-1 p-8 overflow-y-auto">
          <div class="bg-white rounded-3xl min-h-full shadow-sm border border-slate-200 p-6">
            <NuxtPage />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const user = ref({ 
  full_name: '', 
  username: '' 
})

onMounted(() => {
  const userData = useCookie('user_data').value
  if (userData) {
    user.value = userData
  }
})

const handleLogout = () => {
  // Clear the cookies
  useCookie('auth_token').value = null
  useCookie('user_data').value = null
  
  // Refresh state and redirect
  user.value = { full_name: '', username: '' }
  router.push('/login')
}
</script>