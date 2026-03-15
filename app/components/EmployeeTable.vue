<template>
  
    <div class="mt-6 bg-white border border-gray-200 rounded-lg shadow-xs overflow-visible">
        
        <table class="w-full text-left border-collapse">
            
            <thead class="bg-gray-50 border-b border-gray-100 text-gray-400 text-sm font-bold">
                <tr>
                   
                    <th class="p-4 w-10">
                        <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    </th>
                    
                    <th class="p-4">Name</th>
                    <th class="p-4 text-center">Department</th>
                    <th class="p-4 text-center">Position</th>
                    <th class="p-4 text-center">Status</th>
                    <th class="p-4 text-center">Join Date</th>
                    <th class="p-4 text-center">Action</th>
                </tr>

            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
                
                <tr v-for="(emp, index) in employees" :key="index" class="hover:bg-gray-50 transition-colors">
                    
                    <td class="p-4">
                    
                        <input type="checkbox" v-model="emp.ticked"class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                    </td>

                    <td class="p-4 flex items-center gap-3">
                        
                        <img :src="emp.img" class="w-12 h-12 rounded-full object-cover border border-gray-100" />
                        
                        <div>
                            <p class="font-bold text-gray-800">{{ emp.name }}</p>
                            <p class="text-[12px] text-gray-400 font-medium">{{ emp.role }}</p>
                        </div>
                    </td>

                    <td class="p-4 text-center text-gray-400 font-medium">{{ emp.dept }}</td>
                    <td class="p-4 text-center text-gray-400 font-medium">{{ emp.pos }}</td>
                    
                    <td class="p-4 text-center">
                        
                        <span :class="getStatusClass(emp.status)" class="px-3 py-1 rounded-full text-xs font-bold">
                        {{ emp.status }}
                        </span>
                    </td>

                    <td class="p-4 text-center text-gray-400 font-medium">{{ emp.date }}</td>

                    <td class="p-4 text-center relative">
                        
                        <button class="text-gray-400 hover:text-gray-600 p-1">
                            <Icon name="bi:three-dots-vertical" class="text-xl" />
                        </button>

                        
                    </td>
                    
                </tr>
            </tbody>
        
        </table>
    </div>

</template>

<script setup>
import { ref } from 'vue'


const employees = ref([
  { name: 'LimNi Mol',
    role: 'UI/UX Designer', 
    dept: 'Marketing', 
    pos: 'Manger', 
    status: 'Active', 
    date: '25-03-2026', 
    ticked: true, 
    img: 'http://localhost:3000/_nuxt/assets/employeepf.png' },



  { name: 'Bessie Cooper', 
  role: 'Product Designer', 
  dept: 'HR', 
  pos: 'Recruiter', 
  status: 'Absent', 
  date: '17-09-2022', 
  ticked: false, 
  img: 'http://localhost:3000/_nuxt/assets/employeepf2.png' },


  { name: 'Apav Cuties', 
  role: 'Full-Stack Developer', 
  dept: 'Design', 
  pos: 'UX/UI Designer', 
  status: 'Active', 
  date: '12-12-2024', 
  ticked: false, 
  img: 'http://localhost:3000/_nuxt/assets/employyee1.png' },
  

  { name: 'Luo Liee', 
    role: 'Finance', 
    dept: 'Finance', 
    pos: 'Finance Manger', 
    status: 'On leave', 
    date: '02-11-2024', 
    ticked: false, 
    img: 'http://localhost:3000/_nuxt/assets/employeepf3.png' }
])

const getStatusClass = (status) => {
  if (status === 'Active') return 'bg-green-50 text-green-500'
  if (status === 'Absent') return 'bg-red-50 text-red-500'
  return 'bg-orange-50 text-orange-500'
}


</script>