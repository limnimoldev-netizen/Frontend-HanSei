<script setup>
import { ref, onMounted } from 'vue';
import { useCookie } from '#imports';

const tokenCookie = useCookie('auth_token');
const employees = ref([]);
const loading = ref(false);

const getAuthHeaders = () => ({
  Accept: 'application/json',
  Authorization: `Bearer ${tokenCookie.value}`
});

// Helper to get the LATEST log for the table display
const getLatestLog = (emp) => {
  if (!emp.dailyLogs || emp.dailyLogs.length === 0) {
    return { date: 'No Record', in: '--', out: '--', duration: '--', status: 'Absent' };
  }
  // Returns the last log in the array
  return emp.dailyLogs[emp.dailyLogs.length - 1];
};

const getStatusStyle = (status) => {
  if (status === 'On Time' || status === 'Active') return 'bg-green-50 text-green-500 border-green-100';
  if (status === 'Late') return 'bg-orange-50 text-orange-500 border-orange-100';
  return 'bg-red-50 text-red-500 border-red-100';
};

const loadEmployees = async () => {
  if (!tokenCookie.value) return;
  loading.value = true;

  try {
    const users = await $fetch('http://127.0.0.1:8000/api/user', { headers: getAuthHeaders() });
    const attendances = await $fetch('http://127.0.0.1:8000/api/attendance', { headers: getAuthHeaders() });

    employees.value = users.map(user => {
      const userLogs = attendances.filter(a => a.user_id === user.id);
      
      const dailyLogs = userLogs.map(a => {
        const checkIn = a.check_in ? new Date(a.check_in) : null;
        const checkOut = a.check_out ? new Date(a.check_out) : null;
        let hours = 0;
        if (checkIn && checkOut) hours = (checkOut - checkIn) / 1000 / 3600;

        return {
          date: checkIn ? checkIn.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
          in: a.check_in ? new Date(a.check_in).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--',
          out: a.check_out ? new Date(a.check_out).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--',
          duration: hours > 0 ? `${Math.floor(hours)}h:${Math.round((hours % 1) * 60)}mn` : '--',
          status: hours >= 8 ? 'Active' : (a.check_in ? 'Late' : 'Absent')
        };
      });

      return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        role: user.position || 'Employee',
        avatar: user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`,
        dailyLogs
      };
    });
  } catch (err) {
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(loadEmployees);
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    
    <div v-if="loading" class="text-center py-10 font-bold text-primary animate-pulse">
      FETCHING ATTENDANCE DATA...
    </div>

    <div v-else class="mt-6 bg-white border border-gray-200 rounded-lg shadow-xs overflow-hidden">
        <table class="w-full text-left border-collapse">
            <thead class="bg-primary border-b border-gray-100 text-[#ffff] text-sm font-bold">
                <tr>
                    <th class="p-4">Employee Name</th>
                    <th class="p-4 text-center">Date</th>
                    <th class="p-4 text-center">Check In</th>
                    <th class="p-4 text-center">Check Out</th>
                    <th class="p-4 text-center">Spent</th>
                    <th class="p-4 text-center">Status</th>
                    <th class="p-4 text-center">Action</th>
                </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="emp in employees" :key="emp.id" class="hover:bg-gray-50 transition-colors">
                    <td class="p-4 flex items-center gap-3">
                        <img :src="emp.avatar" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                        <div>
                            <p class="font-bold text-gray-800">{{ emp.name }}</p>
                            <p class="text-[10px] text-gray-400 font-medium">{{ emp.role }}</p>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center text-gray-400 font-medium">{{ getLatestLog(emp).date }}</td>
                    <td class="p-4 text-center text-gray-400 font-medium">{{ getLatestLog(emp).in }}</td>
                    <td class="p-4 text-center text-gray-400 font-medium">{{ getLatestLog(emp).out }}</td>
                    <td class="p-4 text-center text-gray-400 font-medium">{{ getLatestLog(emp).duration }}</td>
                    
                    <td class="p-4">
                        <div class="flex justify-center">
                          <span :class="getStatusStyle(getLatestLog(emp).status)" class="px-3 py-1 rounded-full text-sm font-bold border">
                              {{ getLatestLog(emp).status }}
                          </span>
                        </div>
                    </td>
                    
                    <td class="p-4 text-center cursor-pointer hover:text-primary">
                        <Icon name="bi:three-dots-vertical" class="text-base" />
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div v-if="employees.length === 0" class="p-10 text-center text-gray-400">
            No employee records found.
        </div>
    </div>
  </div>
</template>